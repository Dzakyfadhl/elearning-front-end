import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Gender } from '../../../model/gender';
import { StudentUpdateRequest } from '../../../model/student/student-edit-request';
import { StudentResponse } from '../../../model/student/student-response';
import { UpdateIsActiveRequestDTO } from '../../../model/update-isactive-request';
import { AuthService } from '../../../service/auth.service';
import { StudentService } from '../../../service/student.service';
import { ToastService } from '../../../service/toast.service';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css'],
})
export class AdminStudentComponent implements OnInit {
  constructor(
    private toastService: ToastService,
    private confirmationService: ConfirmationService,
    private studentService: StudentService,
    private authService: AuthService
  ) {}

  isEditModalVisible: boolean;
  submitted = false;

  students: StudentResponse[];
  editRequest: StudentUpdateRequest;

  genders: { key: string; value: string }[];
  selectedGender: string;

  ngOnInit(): void {
    this.initStudentList();
    this.genders = Object.keys(Gender)
      .filter((item) => isNaN(Number(item)))
      .map((item) => {
        return { key: item.toUpperCase(), value: item };
      });
  }

  async initStudentList() {
    const response = await this.studentService.getAllStudent();
    if (response.code === 200) {
      this.students = response.result;
    }
  }

  openEditDialog(): void {
    this.isEditModalVisible = true;
    this.submitted = false;
  }

  hideEditDialog(): void {
    this.isEditModalVisible = false;
    this.submitted = false;
  }

  edit(student: StudentResponse): void {
    this.isEditModalVisible = true;
    this.selectedGender = student.gender.toString();
    this.editRequest = {
      id: student.id,
      username: student.username,
      firstName: student.firstName,
      lastName: student.lastName,
      phone: student.phone,
      gender: Gender[this.selectedGender],
      updatedBy: this.authService.getUserId(),
    };
  }

  async updateStudent() {
    this.editRequest.gender = Gender[this.selectedGender];
    const response = await this.studentService.updateStudent(this.editRequest);
    if (response.code === 200) {
      this.toastService.emitSuccessMessage('Updated', response.result);
      await this.initStudentList();
      this.hideEditDialog();
    }
  }

  updateActive(student: StudentResponse) {
    let request = new UpdateIsActiveRequestDTO();
    request.id = student.id;
    request.updatedBy = this.authService.getLoginResponse().userId;
    let flag: string;

    if (student.isActive) {
      flag = 'in active';
      request.status = false;
    } else {
      flag = 'active';
      request.status = true;
    }
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${flag} ${student.firstName} ${student.lastName} ?`,
      header: 'Update Active Confirm.',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        const response = await this.studentService.updateActive(request);
        if (response.code === 200) {
          this.toastService.emitSuccessMessage('Updated', response.result);
          this.initStudentList();
        }
      },
    });
  }

  delete(student: StudentResponse) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${student.firstName} ${student.lastName} ?`,
      header: 'Delete Confirm.',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        const response = await this.studentService.deleteStudent(student.id);
        if (response.code === 200) {
          this.toastService.emitSuccessMessage('Deleted', response.result);
          this.initStudentList();
        }
      },
    });
  }
}
