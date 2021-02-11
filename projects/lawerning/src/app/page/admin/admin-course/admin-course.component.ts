import { NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { CourseCategoryResponseDTO } from '../../../model/course-category-dto/course-category-reponse';
import { CourseAdminResponseDTO } from '../../../model/course-dto/course-admin-response';
import { CourseCreateRequestDTO } from '../../../model/course-dto/course-create-request';
import { CourseUpdateRequestDTO } from '../../../model/course-dto/course-update-request';
import { CourseStatus } from '../../../model/course-status';
import { CourseTypeResponse } from '../../../model/course-type-dto/course-type-response';
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

  startTime: string;
  endTime: string;

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
    private courseCategoryService: CourseCategoryService
  ) {}

  ngOnInit(): void {
    this.courseStatus = Object.keys(CourseStatus)
      .filter((item) => isNaN(Number(item)))
      .map((item) => {
        return { key: item.toUpperCase(), value: item };
      });
    console.log(this.courseStatus);

    this.defineCourses();
    this.dropdownCategories();
    this.dropdownCourseTypes();
    this.dropdownTeachers();
  }

  defineCourses() {
    this.courseService.getCoursesForAdmin().subscribe(
      (val) => {
        this.courses = val.result;
        console.log(this.courses);
      },
      (err) => {
        console.error(err.error);
      }
    );
  }

  dropdownCourseTypes() {
    this.courseTypeService.getListCourseType().subscribe(
      (val) => {
        this.courseTypes = val.result;
        console.log(this.courseTypes);
      },
      (err) => {
        console.error(err.error);
      }
    );
  }

  dropdownCategories() {
    this.courseCategoryService.getCourseCategories().subscribe(
      (val) => {
        this.categories = val.result;
        console.log(this.categories);
      },
      (err) => {
        console.error(err.error);
      }
    );
  }

  dropdownTeachers() {
    this.teacherService.getAllTeachersForAdmin().subscribe(
      (val) => {
        this.teachers = val.result;
        console.log(this.teachers);
        this.teachers.forEach((teacher) => {
          this.teacherVal.push({
            key: teacher.id,
            value: `${teacher.firstName} ${teacher.lastName}`,
          });
        });
      },
      (err) => {
        console.error(err.error);
      }
    );
  }

  openNew() {
    this.createRequest = new CourseCreateRequestDTO();
    this.submitted = false;
    this.isCreateModalVisible = true;
  }

  createCourse() {
    this.submitted = true;
    this.createRequest.createdBy = this.auth.getUserId();
    this.createRequest.courseCategoryId = this.selectedCategory;
    this.createRequest.courseTypeId = this.selectedType;
    this.createRequest.teacherId = this.selectedTeacher;

    this.courseService.insertCourse(this.createRequest).subscribe(
      (response) => {
        if (response.code === 201 && response.result) {
          this.toastService.emitSuccessMessage('Submitted', response.result);
          this.hideModal();
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

  hideModal() {
    this.isCreateModalVisible = false;
    this.isEditModalVisible = false;
    this.submitted = false;
  }
}
