import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import Constants from '../../../constants/constant';
import { ExperienceModel } from '../../../model/experience-model';
import { TeacherProfileResponse } from '../../../model/teacher-dto/teacher-profile-response';
import { AuthService } from '../../../service/auth.service';
import { TeacherService } from '../../../service/teacher.service';
import { ToastService } from '../../../service/toast.service';

@Component({
  selector: 'app-profile-teacher',
  templateUrl: './profile-teacher.component.html',
  styleUrls: ['./profile-teacher.component.css'],
})
export class ProfileTeacherComponent implements OnInit {
  profileTeacher = new TeacherProfileResponse();
  experience = new ExperienceModel();
  photo: any;
  dateStart: any;
  dateEnd: any;
  isEdit: boolean;

  isDisplayEx = false;
  isDisplay = false;
  constructor(
    private teacherService: TeacherService,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.getProfileTeacher();
  }
  getProfileTeacher() {
    this.teacherService.getById().subscribe((value) => {
      this.profileTeacher = value.result;
      if (!this.profileTeacher.photoId) {
        this.photo = `assets/images/default.png`;
      } else {
        this.photo = `${Constants.BASE_URL_FILE}/${this.profileTeacher.photoId}`;
      }
    });
  }

  formEdit(data: TeacherProfileResponse) {
    this.router.navigate(['teacher/update/profile/teacher', data]);
  }
  showDialogEx() {
    this.isDisplayEx = true;
    this.isEdit = false;
  }
  cancelDialogEx() {
    this.isDisplayEx = false;
  }

  saveDialog() {
    let periodStart = new Date(this.dateStart);
    let periodEnd = new Date(this.dateEnd);
    let datePipe = new DatePipe('en-US');
    let formatDateStart = datePipe.transform(
      periodStart.toLocaleDateString(),
      'yyyy-MM-dd'
    );
    let formatDateEnd = datePipe.transform(
      periodEnd.toLocaleDateString(),
      'yyyy-MM-dd'
    );
    this.experience.startDate = formatDateStart;
    this.experience.endDate = formatDateEnd;
    this.experience.userId = this.authService.getLoginResponse().userId;
    this.experience.teacherId = this.authService.getLoginResponse().userRoleId;

    if (this.isEdit) {
      console.log(this.experience);
      this.teacherService
        .updateExperience(this.experience)
        .subscribe((response) => {
          if (response.code === 200 && response.result) {
            this.toastService.emitSuccessMessage(
              'Submitted',
              'Success to update experience teacher'
            );
            console.log(response);

            this.getProfileTeacher();
            this.isDisplayEx = false;
          }
        });
    } else {
      this.teacherService
        .createExperience(this.experience)
        .subscribe((response) => {
          if (response.code === 201 && response.result) {
            this.toastService.emitSuccessMessage(
              'Submitted',
              'Success to insert experience teacher'
            );
            this.getProfileTeacher();
            this.isDisplayEx = false;
          }
        });
    }
  }

  updateExperience(data: ExperienceModel) {
    this.isDisplayEx = true;
    this.isEdit = true;
    console.log(data);
    this.experience = new ExperienceModel();
    this.experience.id = data.id;
    this.experience.description = data.description;
    this.dateStart = new Date(data.startDate);
    this.dateEnd = new Date(data.endDate);
    this.experience.teacherId = data.teacherId;
    this.experience.title = data.title;
    this.experience.userId = this.authService.getLoginResponse().userId;
    console.log(data);
  }
  deleteExperience(index: number) {
    let idExperience = this.profileTeacher.experiences[index].id;
    // console.log(idExperience);

    this.confirmationService.confirm({
      message: `Do you want to delete the experience ? `,
      header: 'Delete Confirm.',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        try {
          this.teacherService
            .deleteExperience(idExperience)
            .subscribe((val) => {
              if (val.code == 200) {
                this.toastService.emitSuccessMessage('Deleted', val.result);
                this.getProfileTeacher();
              }
            });
        } catch (error) {
          this.toastService.emitHttpErrorMessage(
            error,
            'Failed to delete exam'
          );
        }
        this.getProfileTeacher();
      },
    });
  }
}
