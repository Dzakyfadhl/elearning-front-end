import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { CourseCategoryResponseDTO } from '../../../model/course-category-dto/course-category-reponse';
import { CourseAdminResponseDTO } from '../../../model/course-dto/course-admin-response';
import { CourseCreateRequestDTO } from '../../../model/course-dto/course-create-request';
import { CourseUpdateRequestDTO } from '../../../model/course-dto/course-update-request';
import { UpdateStatusRequestDTO } from '../../../model/course-dto/update-course-status-request';
import { CourseStatus } from '../../../model/course-status';
import { CourseTypeResponse } from '../../../model/course-type-dto/course-type-response';
import { TeacherForAdminDTO } from '../../../model/teacher-dto/teacher-admin-response';
import { UpdateIsActiveRequestDTO } from '../../../model/update-isactive-request';
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

  datePipe = new DatePipe('en-US');
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
    this.courseService.getCoursesForAdmin().subscribe((val) => {
      this.courses = val.result;
    });
  }

  dropdownCourseTypes() {
    this.courseTypeService.getListCourseType().subscribe((val) => {
      this.courseTypes = val.result;
    });
  }

  dropdownCategories() {
    this.courseCategoryService.getCourseCategories().subscribe((val) => {
      this.categories = val.result;
    });
  }

  dropdownTeachers() {
    this.teacherService.getAllTeachersForAdmin().subscribe((val) => {
      this.teachers = val.result;
      this.teachers.forEach((teacher) => {
        this.teacherVal.push({
          key: teacher.id,
          value: `${teacher.firstName} ${teacher.lastName}`,
        });
      });
    });
  }

  openNew() {
    this.createRequest = new CourseCreateRequestDTO();
    this.submitted = false;
    this.isCreateModalVisible = true;
  }

  createCourse() {
    const formattedDateStart = this.datePipe.transform(
      this.startTime,
      'yyyy-MM-dd'
    );
    const formattedDateEnd = this.datePipe.transform(
      this.endTime,
      'yyyy-MM-dd'
    );

    this.submitted = true;
    this.createRequest.createdBy = this.auth.getUserId();
    this.createRequest.courseCategoryId = this.selectedCategory;
    this.createRequest.courseTypeId = this.selectedType;
    this.createRequest.teacherId = this.selectedTeacher;
    this.createRequest.periodStart = formattedDateStart;
    this.createRequest.periodEnd = formattedDateEnd;
    this.courseService
      .insertCourse(this.createRequest)
      .subscribe((response) => {
        if (response.code === 201 && response.result) {
          this.toastService.emitSuccessMessage('Submitted', response.result);
          this.hideModal();
          this.defineCourses();
        }
      });
  }

  editCourse(course: CourseAdminResponseDTO) {
    this.startTime = new Date(course.periodStart);
    this.endTime = new Date(course.periodEnd);

    this.selectedCategory = course.categoryId;
    this.selectedType = course.typeId;
    this.selectedTeacher = course.teacherId;

    this.isEditModalVisible = true;
    this.updateRequest = {
      id: course.id,
      code: course.code,
      description: course.description,
      capacity: course.capacity,
      periodStart: this.startTime.toString(),
      periodEnd: this.endTime.toString(),
      createdBy: null,
      status: course.status,
      courseCategoryId: this.selectedCategory,
      courseTypeId: this.selectedType,
      teacherId: this.selectedTeacher,
      updateBy: this.auth.getUserId(),
    };
  }
  async updateCourse() {
    const formattedDateStart = this.datePipe.transform(
      this.startTime,
      'yyyy-MM-dd'
    );
    const formattedDateEnd = this.datePipe.transform(
      this.endTime,
      'yyyy-MM-dd'
    );
    this.updateRequest.periodStart = formattedDateStart;
    this.updateRequest.periodEnd = formattedDateEnd;
    const response = await this.courseService.updateCourse(this.updateRequest);
    if (response.code === 200) {
      this.toastService.emitSuccessMessage('Updated', response.result);
      this.defineCourses();
      this.hideModal();
    }
  }

  delete(course: CourseAdminResponseDTO) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${course.code} ?`,
      header: 'Delete Confirm.',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        const response = await this.courseService.deleteCourse(course.id);
        if (response.code === 200) {
          this.toastService.emitSuccessMessage('Deleted', response.result);
          this.defineCourses();
        }
      },
    });
  }

  updateActive(course: CourseAdminResponseDTO) {
    let request = new UpdateIsActiveRequestDTO();
    request.id = course.id;
    request.updatedBy = this.auth.getLoginResponse().userId;
    let flag: string;

    if (course.active) {
      flag = 'in active';
      request.status = false;
    } else {
      flag = 'active';
      request.status = true;
    }
    this.confirmationService.confirm({
      message: `Are you sure you want to ${flag} ${course.code} ?`,
      header: 'Update Active Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        const response = await this.courseService.updateActive(request);
        if (response.code === 200 && response.result) {
          this.toastService.emitSuccessMessage('Delete', response.result);
          this.defineCourses();
        }
      },
    });
  }

  async updateStatusCourse() {
    let arrStatus: UpdateStatusRequestDTO[] = [];
    const now = new Date();
    this.courses.forEach((val) => {
      let statusUpdate = new UpdateStatusRequestDTO();
      statusUpdate.id = val.id;
      statusUpdate.updatedBy = this.auth.getLoginResponse().userId;
      let formatStart = new Date(val.periodStart);
      let formatEnd = new Date(val.periodEnd);

      if (now >= formatStart && now < formatEnd) {
        statusUpdate.status = CourseStatus.ONGOING;
        arrStatus.push(statusUpdate);
      } else if (now < formatStart) {
        statusUpdate.status = CourseStatus.REGISTRATION;
        arrStatus.push(statusUpdate);
      } else if (now >= formatEnd) {
        statusUpdate.status = CourseStatus.FINISHED;
        arrStatus.push(statusUpdate);
      }
    });

    const response = await this.courseService.updateCoursesStatus(arrStatus);
    if (response.code === 200) {
      this.toastService.emitSuccessMessage('Success', response.result);
      this.defineCourses();
    }
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
