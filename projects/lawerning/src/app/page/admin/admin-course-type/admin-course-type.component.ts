import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { CourseTypeCreateRequest } from '../../../model/course-type-dto/course-type-create-request';
import { CourseTypeResponse } from '../../../model/course-type-dto/course-type-response';
import { CourseTypeUpdateRequestDTO } from '../../../model/course-type-dto/course-type-update-request';
import { UpdateIsActiveRequestDTO } from '../../../model/update-isactive-request';
import { AuthService } from '../../../service/auth.service';
import { CourseTypeService } from '../../../service/course-type.service';
import { ToastService } from '../../../service/toast.service';

@Component({
  selector: 'app-admin-course-type',
  templateUrl: './admin-course-type.component.html',
  styleUrls: ['./admin-course-type.component.css'],
})
export class AdminCourseTypeComponent implements OnInit {
  isCreateModalVisible: boolean;
  isEditModalVisible: boolean;

  courseTypes: CourseTypeResponse[];
  createRequest: CourseTypeCreateRequest;
  updateRequest: CourseTypeUpdateRequestDTO;

  submitted: boolean;
  codeVal: string;
  nameVal: string;

  displayModal: boolean;
  displayConfirmation: boolean;

  constructor(
    private auth: AuthService,
    private courseTypeService: CourseTypeService,
    private confirmationService: ConfirmationService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.defineCourseType();
  }

  defineCourseType() {
    this.courseTypeService.getListCourseType().subscribe(
      (val) => {
        this.courseTypes = val.result;
      },
      (err) => {
        console.error(err.error);
      }
    );
  }

  openNew() {
    this.createRequest = new CourseTypeCreateRequest();
    this.submitted = false;
    this.isCreateModalVisible = true;
  }

  createCourseType() {
    this.submitted = true;
    this.createRequest.createdBy = this.auth.getUserId();
    this.courseTypeService.insertCourseType(this.createRequest).subscribe(
      (response) => {
        if (response.code === 201 && response.result) {
          this.toastService.emitSuccessMessage('Submitted', response.result);
          this.hideModal();
          this.defineCourseType();
        }
      },
      (error: HttpErrorResponse) => {
        this.toastService.emitHttpErrorMessage(
          error,
          'Failed to add new course type'
        );
      }
    );
  }

  editCourseType(courseType: CourseTypeResponse) {
    this.isEditModalVisible = true;
    this.updateRequest = {
      id: courseType.id,
      code: courseType.code,
      name: courseType.name,
      createdBy: 'admin',
      updatedBy: this.auth.getUserId(),
    };
  }

  updateCourseType() {
    this.courseTypeService.updateCourseType(this.updateRequest).subscribe(
      (response) => {
        if (response.code === 200) {
          this.toastService.emitSuccessMessage(
            'Updated',
            'Course type has been updated successfully.'
          );
        }
      },
      (error: HttpErrorResponse) => {
        this.toastService.emitHttpErrorMessage(
          error,
          'Failed to update course type'
        );
      }
    );
  }

  deleteCourseType(ct: CourseTypeResponse) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${ct.code} ?`,
      header: 'Delete Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.courseTypeService.deleteCourseTypeById(ct.id).subscribe(
          (response) => {
            if (response.code === 200 && response.result) {
              this.toastService.emitSuccessMessage('Deleted', response.result);
              this.courseTypes = this.courseTypes.filter(
                (value) => value.id !== ct.id
              );
            }
          },
          (error: HttpErrorResponse) => {
            this.toastService.emitHttpErrorMessage(
              error,
              'Failed to delete course type'
            );
          }
        );
      },
    });
  }

  updateActive(courseType: CourseTypeResponse) {
    let request = new UpdateIsActiveRequestDTO();
    request.id = courseType.id;
    request.updatedBy = this.auth.getLoginResponse().userId;
    let flag: string;

    if (courseType.active) {
      flag = 'in active';
      request.status = false;
    } else {
      flag = 'active';
      request.status = true;
    }
    this.confirmationService.confirm({
      message: `Are you sure you want to ${flag} ${courseType.code} ?`,
      header: 'Update Active Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.courseTypeService.updateIsActive(request).subscribe(
          (response) => {
            if (response.code === 200 && response.result) {
              this.toastService.emitSuccessMessage('Deleted', response.result);
              this.defineCourseType();
            }
          },
          (error: HttpErrorResponse) => {
            this.toastService.emitHttpErrorMessage(
              error,
              'Failed to update active subject category'
            );
          }
        );
      },
    });
  }

  confirmDelete() {
    this.displayConfirmation = true;
  }

  hideModal() {
    this.isCreateModalVisible = false;
    this.isEditModalVisible = false;
    this.submitted = false;
  }
}
