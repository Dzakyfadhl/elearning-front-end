import { DatePipe } from '@angular/common';
import { NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { CourseCategoryResponseDTO } from '../../../model/course-category-dto/course-category-reponse';
import { CourseAdminResponseDTO } from '../../../model/course-dto/course-admin-response';
import { CourseCreateRequestDTO } from '../../../model/course-dto/course-create-request';
import { CourseUpdateRequestDTO } from '../../../model/course-dto/course-update-request';
import { CourseStatus } from '../../../model/course-status';
import { CourseTypeResponse } from '../../../model/course-type-dto/course-type-response';
import { DeleteCourseTypeRequestDTO } from '../../../model/course-type-dto/delete-course-type-request';
import { TeacherForAdminDTO } from '../../../model/teacher-dto/teacher-admin-response';
import { AuthService } from '../../../service/auth.service';
import { CourseCategoryService } from '../../../service/course-category.service';
import { CourseTypeService } from '../../../service/course-type.service';
import { CourseService } from '../../../service/course.service';
import { TeacherService } from '../../../service/teacher.service';
import { ToastService } from '../../../service/toast.service';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css'],
})
export class AdminCourseComponent implements OnInit {
  isCreateModalVisible: boolean;
  isEditModalVisible: boolean;

  courses: CourseAdminResponseDTO[];
  createRequest: CourseCreateRequestDTO;
  updateRequest: CourseUpdateRequestDTO;

  selectedType: string;
  selectedTeacher: string;
  selectedCategory: string;

  startTime: Date;
  endTime: Date;

  teachers: TeacherForAdminDTO[];
  courseTypes: CourseTypeResponse[];
  categories: CourseCategoryResponseDTO[];

  teacherVal: { key: string; value: string }[] = [];
  courseStatus: { key: string; value: string }[];

  submitted: boolean;

  first = 0;

  rows = 5;

  constructor(
    private auth: AuthService,
    private courseService: CourseService,
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
    private teacherService: TeacherService,
    private courseTypeService: CourseTypeService,
    private courseCategoryService: CourseCategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseStatus = Object.keys(CourseStatus)
      .filter((item) => isNaN(Number(item)))
      .map((item) => {
        return { key: item.toUpperCase(), value: item };
      });

    this.defineCourses();
    this.dropdownCategories();
    this.dropdownCourseTypes();
    this.dropdownTeachers();
    this.teacherVal;
  }

  defineCourses() {
    this.courseService.getCoursesForAdmin().subscribe(
      (val) => {
        this.courses = val.result;
        console.log(this.courses);
      },
      (err) => {
        this.toastService.emitHttpErrorMessage(err);
      }
    );
  }

  dropdownCourseTypes() {
    this.courseTypeService.getListCourseType().subscribe(
      (val) => {
        this.courseTypes = val.result;
      },
      (err) => {
        this.toastService.emitHttpErrorMessage(err);
      }
    );
  }

  dropdownCategories() {
    this.courseCategoryService.getCourseCategories().subscribe(
      (val) => {
        this.categories = val.result;
      },
      (err) => {
        this.toastService.emitHttpErrorMessage(err);
      }
    );
  }

  dropdownTeachers() {
    this.teacherService.getAllTeachersForAdmin().subscribe(
      (val) => {
        this.teachers = val.result;
        this.teachers.forEach((teacher) => {
          this.teacherVal.push({
            key: teacher.id,
            value: `${teacher.firstName} ${teacher.lastName}`,
          });
        });
      },
      (err) => {
        this.toastService.emitHttpErrorMessage(err);
      }
    );
  }

  openNew() {
    this.createRequest = new CourseCreateRequestDTO();
    this.submitted = false;
    this.isCreateModalVisible = true;
  }

  createCourse() {
    console.log(this.createRequest.periodStart);
    let datePipe = new DatePipe('en-US');

    const formattedDateStart = datePipe.transform(this.startTime, 'yyyy-MM-dd');
    const formattedDateEnd = datePipe.transform(this.endTime, 'yyyy-MM-dd');

    this.submitted = true;
    this.createRequest.createdBy = this.auth.getUserId();
    this.createRequest.courseCategoryId = this.selectedCategory;
    this.createRequest.courseTypeId = this.selectedType;
    this.createRequest.teacherId = this.selectedTeacher;
    this.createRequest.periodStart = formattedDateStart;
    this.createRequest.periodEnd = formattedDateEnd;
    this.courseService.insertCourse(this.createRequest).subscribe(
      (response) => {
        if (response.code === 201 && response.result) {
          this.toastService.emitSuccessMessage('Submitted', response.result);
          this.hideModal();
          this.defineCourses();
        }
      },
      (error: HttpErrorResponse) => {
        this.toastService.emitHttpErrorMessage(
          error,
          'Failed to add new course'
        );
      }
    );
  }

  editCourse(course: CourseAdminResponseDTO) {
    this.selectedCategory = course.categoryId;
    this.selectedType = course.typeId;
    this.selectedTeacher = course.teacherId;

    this.isEditModalVisible = true;
    this.updateRequest = {
      id: course.id,
      code: course.code,
      description: course.description,
      capacity: course.capacity,
      periodStart: course.periodStart,
      periodEnd: course.periodEnd,
      createdBy: null,
      status: course.status,
      courseCategoryId: this.selectedCategory,
      courseTypeId: this.selectedType,
      teacherId: this.selectedTeacher,
      updateBy: this.auth.getUserId(),
    };
  }
  async updateCourse() {
    try {
      const response = await this.courseService.updateCourse(
        this.updateRequest
      );
      if (response.code === 200) {
        this.toastService.emitSuccessMessage('Updated', response.result);
        this.defineCourses();
        this.hideModal();
      }
    } catch (error) {
      this.toastService.emitHttpErrorMessage(error, 'Failed to update Course.');
    }
  }

  delete(course: CourseAdminResponseDTO) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${course.code} ?`,
      header: 'Delete Confirm.',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        let deleteRequest = new DeleteCourseTypeRequestDTO();
        deleteRequest.id = course.id;
        deleteRequest.updatedBy = this.auth.getLoginResponse().userId;
        try {
          const response = await this.courseService.deleteCourse(deleteRequest);
          if (response.code === 200) {
            this.toastService.emitSuccessMessage('Deleted', response.result);
            this.defineCourses();
          }
        } catch (error) {
          this.toastService.emitHttpErrorMessage(
            error,
            'Failed to delete course'
          );
        }
      },
    });
  }

  hideModal() {
    this.isCreateModalVisible = false;
    this.isEditModalVisible = false;
    this.submitted = false;
  }

  viewModules(id: string) {
    this.router.navigateByUrl(`/admin/course/${id}`);
  }
}
