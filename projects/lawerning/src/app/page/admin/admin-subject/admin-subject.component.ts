import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { SubjectCategoryCreateRequestDTO } from '../../../model/subject-category-dto/subject-category-create-request';
import { SubjectCategoryResponseDTO } from '../../../model/subject-category-dto/subject-category-response';
import { SubjectCategoryUpdateRequestDTO } from '../../../model/subject-category-dto/subject-category-update-request';
import { UpdateIsActiveRequestDTO } from '../../../model/update-isactive-request';
import { AuthService } from '../../../service/auth.service';
import { SubjectCategoryService } from '../../../service/subject-category.service';
import { ToastService } from '../../../service/toast.service';

@Component({
  selector: 'app-admin-subject',
  templateUrl: './admin-subject.component.html',
  styleUrls: ['./admin-subject.component.css'],
})
export class AdminSubjectComponent implements OnInit {
  isCreateModalVisible: boolean;
  isEditModalVisible: boolean;

  listSubjects: SubjectCategoryResponseDTO[];
  createRequest: SubjectCategoryCreateRequestDTO;
  updateRequest: SubjectCategoryUpdateRequestDTO;

  submitted: boolean;
  displayModal: boolean;
  displayConfirmation: boolean;

  codeVal: string;
  nameVal: string;
  descVal: string;

  first = 0;
  rows = 5;

  constructor(
    private auth: AuthService,
    private subjectService: SubjectCategoryService,
    private confirmationService: ConfirmationService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.defineSubjects();
  }

  defineSubjects() {
    this.subjectService.getSubjectCategory().subscribe(
      (val) => {
        this.listSubjects = val.result;
      },
      (err) => {
        console.error(err.error);
      }
    );
  }

  openNew() {
    this.createRequest = new SubjectCategoryCreateRequestDTO();
    this.submitted = false;
    this.isCreateModalVisible = true;
  }

  createSubjectCategory() {
    this.submitted = true;
    this.createRequest.createdBy = this.auth.getUserId();
    this.subjectService.insertSubjectCategory(this.createRequest).subscribe(
      (response) => {
        if (response.code === 201 && response.result) {
          this.toastService.emitSuccessMessage('Submitted', response.result);
          this.defineSubjects();
          this.hideModal();
        }
      },
      (error: HttpErrorResponse) => {
        this.toastService.emitHttpErrorMessage(
          error,
          'Failed to add new subject category'
        );
      }
    );
  }

  editSubjectCategory(subjectCategory: SubjectCategoryResponseDTO) {
    this.isEditModalVisible = true;
    this.updateRequest = {
      id: subjectCategory.id,
      code: subjectCategory.code,
      description: subjectCategory.description,
      subjectName: subjectCategory.name,
      createdBy: null,
      updatedBy: this.auth.getUserId(),
    };
  }

  updateSubjectCategory() {
    this.subjectService.updateSubjectCategory(this.updateRequest).subscribe(
      (response) => {
        if (response.code === 200) {
          this.toastService.emitSuccessMessage(
            'Updated',
            'Subject category has been updated successfully.'
          );
          this.defineSubjects();
          this.hideModal();
        }
      },
      (error: HttpErrorResponse) => {
        this.toastService.emitHttpErrorMessage(
          error,
          'Failed to update subject category'
        );
      }
    );
  }

  deleteSubjectCategory(sc: SubjectCategoryResponseDTO) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${sc.code} ?`,
      header: 'Delete Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.subjectService.deleteSubjectCategory(sc.id).subscribe(
          (response) => {
            if (response.code === 200 && response.result) {
              this.toastService.emitSuccessMessage('Deleted', response.result);
              this.listSubjects = this.listSubjects.filter(
                (value) => value.id !== sc.id
              );
            }
          },
          (error: HttpErrorResponse) => {
            this.toastService.emitHttpErrorMessage(
              error,
              'Failed to delete subject category'
            );
          }
        );
      },
    });
  }

  updateActive(subject: SubjectCategoryResponseDTO) {
    let request = new UpdateIsActiveRequestDTO();
    request.id = subject.id;
    request.updatedBy = this.auth.getLoginResponse().userId;
    let flag: string;

    if (subject.active) {
      flag = 'in active';
      request.status = false;
    } else {
      flag = 'active';
      request.status = true;
    }
    this.confirmationService.confirm({
      message: `Are you sure you want to ${flag} ${subject.code} ?`,
      header: 'Update Active Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.subjectService.updateIsActive(request).subscribe(
          (response) => {
            if (response.code === 200 && response.result) {
              this.toastService.emitSuccessMessage('Deleted', response.result);
              this.defineSubjects();
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
