import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { CourseCategoryCreateRequestDTO } from '../../../model/course-category-dto/course-category-create-request';
import { CourseCategoryResponseDTO } from '../../../model/course-category-dto/course-category-reponse';
import { CourseCategoryUpdateRequestDTO } from '../../../model/course-category-dto/course-category-update-request';
import { UpdateIsActiveRequestDTO } from '../../../model/update-isactive-request';
import { AuthService } from '../../../service/auth.service';
import { CourseCategoryService } from '../../../service/course-category.service';
import { ToastService } from '../../../service/toast.service';

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css'],
})
export class CourseCategoryComponent implements OnInit {
  isCreateModalVisible: boolean;
  isEditModalVisible: boolean;

  courseCategories: CourseCategoryResponseDTO[];
  createRequest: CourseCategoryCreateRequestDTO;
  updateRequest: CourseCategoryUpdateRequestDTO;

  submitted: boolean;
  displayModal: boolean;
  displayConfirmation: boolean;

  constructor(
    private auth: AuthService,
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
    private categoryService: CourseCategoryService
  ) {}

  ngOnInit(): void {
    this.defineCourseCategories();
  }

  defineCourseCategories() {
    this.categoryService.getCourseCategories().subscribe(
      (val) => {
        this.courseCategories = val.result;
        console.log(this.courseCategories);
      },
      (err) => {
        console.error(err.error);
      }
    );
  }

  openNew() {
    this.createRequest = new CourseCategoryCreateRequestDTO();
    this.submitted = false;
    this.isCreateModalVisible = true;
  }

  createCourseCategory() {
    this.submitted = true;
    this.createRequest.createdBy = this.auth.getUserId();
    this.categoryService.insertCourseCategory(this.createRequest).subscribe(
      (response) => {
        if (response.code === 201 && response.result) {
          this.toastService.emitSuccessMessage('Submitted', response.result);
          this.hideModal();
          this.defineCourseCategories();
        }
      },
      (error: HttpErrorResponse) => {
        this.toastService.emitHttpErrorMessage(
          error,
          'Failed to add new course category'
        );
      }
    );
  }

  editCourseCategory(courseCategory: CourseCategoryResponseDTO) {
    this.isEditModalVisible = true;
    this.updateRequest = {
      id: courseCategory.id,
      code: courseCategory.code,
      name: courseCategory.name,
      createdBy: 'admin',
      updatedBy: this.auth.getUserId(),
    };
  }

  updateCourseCategory() {
    this.categoryService.updateCourseCategory(this.updateRequest).subscribe(
      (response) => {
        if (response.code === 200) {
          this.toastService.emitSuccessMessage(
            'Updated',
            'Course category has been updated successfully.'
          );
        }
      },
      (error: HttpErrorResponse) => {
        this.toastService.emitHttpErrorMessage(
          error,
          'Failed to update course category'
        );
      }
    );
  }

  updateActive(courseCategory: CourseCategoryResponseDTO) {
    let request = new UpdateIsActiveRequestDTO();
    request.id = courseCategory.id;
    request.updatedBy = this.auth.getLoginResponse().userId;
    let flag: string;

    if (courseCategory.active) {
      flag = 'in active';
      request.status = false;
    } else {
      flag = 'active';
      request.status = true;
    }
    this.confirmationService.confirm({
      message: `Are you sure you want to ${flag} ${courseCategory.code} ?`,
      header: 'Update Active Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoryService.updateIsActive(request).subscribe(
          (response) => {
            if (response.code === 200 && response.result) {
              this.toastService.emitSuccessMessage('Delete', response.result);
              this.defineCourseCategories();
            }
          },
          (error: HttpErrorResponse) => {
            this.toastService.emitHttpErrorMessage(
              error,
              'Failed to delete course category'
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
