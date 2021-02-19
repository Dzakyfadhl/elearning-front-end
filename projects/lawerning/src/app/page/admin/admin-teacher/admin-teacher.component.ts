import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { TeacherForAdminDTO as TeacherForAdminResponse } from '../../../model/teacher-dto/teacher-admin-response';
import { CreateTeacherRequest } from '../../../model/teacher-dto/create-teacher-request';
import { AuthService } from '../../../service/auth.service';
import { TeacherService } from '../../../service/teacher.service';
import { UpdateTeacherRequest } from '../../../model/teacher-dto/update-teacher-request';
import { ToastService } from '../../../service/toast.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Gender } from '../../../model/gender';
import { UpdateIsActiveRequestDTO } from '../../../model/update-isactive-request';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css'],
})
export class AdminTeacherComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private teacherService: TeacherService,
    private confirmationService: ConfirmationService,
    private toastService: ToastService
  ) {}

  isCreateModalVisible: boolean;
  isEditModalVisible: boolean;

  teachers: TeacherForAdminResponse[];
  createRequest: CreateTeacherRequest;
  updateRequest: UpdateTeacherRequest;

  submitted: boolean;

  genders: { key: string; value: string }[];
  selectedGender: string;

  ngOnInit(): void {
    this.genders = Object.keys(Gender)
      .filter((item) => isNaN(Number(item)))
      .map((item) => {
        return { key: item.toUpperCase(), value: item };
      });
    this.defineTeachers();
    console.log(this.teachers);
  }

  defineTeachers() {
    this.teacherService.getAllTeachersForAdmin().subscribe(
      (val) => {
        this.teachers = val.result;
        console.log(this.teachers);
      },
      (err) => {
        console.error(err.error);
      }
    );
  }

  openNew() {
    this.createRequest = new CreateTeacherRequest();
    this.selectedGender = null;
    this.submitted = false;
    this.isCreateModalVisible = true;
  }

  editTeacher(teacher: TeacherForAdminResponse) {
    this.isEditModalVisible = true;
    this.selectedGender = teacher.gender.toString();
    this.updateRequest = {
      id: teacher.id,
      username: teacher.username,
      firstName: teacher.firstName,
      lastName: teacher.lastName,
      phone: teacher.phone,
      titleDegree: teacher.titleDegree,
      gender: Gender[this.selectedGender],
      updatedBy: this.authService.getUserId(),
    };
  }

  async updateTeacher() {
    this.updateRequest.gender = Gender[this.selectedGender];
    try {
      const response = await this.teacherService.updateTeacherProfile(
        this.updateRequest
      );
      if (response.code === 200) {
        this.toastService.emitSuccessMessage('Updated', response.result);
        this.defineTeachers();
        this.hideModal();
      }
    } catch (error) {
      this.toastService.emitHttpErrorMessage(
        error,
        'Failed to update teacher.'
      );
    }
  }

  deleteTeacher(teacher: TeacherForAdminResponse) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${teacher.firstName} ${teacher.lastName} ?`,
      header: 'Delete Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.teacherService.deleteTeacher(teacher.id).subscribe(
          (response) => {
            if (response.code === 200 && response.result) {
              this.toastService.emitSuccessMessage('Deleted', response.result);
              this.teachers = this.teachers.filter(
                (value) => value.id !== teacher.id
              );
            }
          },
          (error: HttpErrorResponse) => {
            this.toastService.emitHttpErrorMessage(
              error,
              'Failed to delete teacher'
            );
          }
        );
      },
    });
  }

  updateActive(teacher: TeacherForAdminResponse) {
    let request = new UpdateIsActiveRequestDTO();
    request.id = teacher.id;
    request.updatedBy = this.authService.getLoginResponse().userId;
    let flag: string;

    if (teacher.active) {
      flag = 'in active';
      request.status = false;
    } else {
      flag = 'active';
      request.status = true;
    }
    this.confirmationService.confirm({
      message: `Are you sure you want to ${flag} ${teacher.firstName} ${teacher.lastName} ?`,
      header: 'Update Active Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.teacherService.updateIsActive(request).subscribe(
          (response) => {
            if (response.code === 200 && response.result) {
              this.toastService.emitSuccessMessage('Deleted', response.result);
              this.defineTeachers();
            }
          },
          (error: HttpErrorResponse) => {
            this.toastService.emitHttpErrorMessage(
              error,
              'Failed to delete teacher'
            );
          }
        );
      },
    });
  }

  createTeacher() {
    this.submitted = true;
    this.createRequest.gender = Gender[this.selectedGender];
    this.createRequest.createdBy = this.authService.getUserId();
    this.teacherService.createTeacher(this.createRequest).subscribe(
      (response) => {
        if (response.code === 201 && response.result) {
          this.toastService.emitSuccessMessage('Submitted', response.result);
          this.defineTeachers();
          this.hideModal();
        }
      },
      (error: HttpErrorResponse) => {
        this.toastService.emitHttpErrorMessage(
          error,
          'Failed to add new teacher'
        );
      }
    );
  }

  hideModal() {
    this.isCreateModalVisible = false;
    this.isEditModalVisible = false;
    this.submitted = false;
  }
}
