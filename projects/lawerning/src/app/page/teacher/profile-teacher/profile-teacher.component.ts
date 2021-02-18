import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  experiences = [
    {
      title: 'Universitas Brawijaya',
      job: 'Lecturer',
      difference: 'Jul 2020 - Apr 2021',
    },
    {
      title: 'Build With Angga',
      job: 'Front End Mentoring',
      difference: 'Jan 2021 - Apr 2021',
    },
  ];

  isDisplayEx = false;
  constructor(
    private teacherService: TeacherService,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getProfileTeacher();
  }
  getProfileTeacher() {
    this.teacherService.getById().subscribe((value) => {
      this.profileTeacher = value.result;
      console.log(value.result);

      if (!this.profileTeacher.photoId) {
        this.photo = `assets/images/default.png`;
      } else {
        this.photo = `${Constants.BASE_URL_FILE}/${this.profileTeacher.photoId}`;
      }
    });
  }

  formEdit(data: TeacherProfileResponse) {
    console.log(data);
    this.router.navigate(['/update/profile/teacher', data]);
  }
  showDialogEx() {
    this.isDisplayEx = true;
    console.log(this.dateStart);
  }
  cancelDialogEx() {
    this.isDisplayEx = false;
  }

  saveDialog() {
    console.log(this.dateStart);
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
    console.log(formatDateStart);
    console.log(formatDateEnd);

    this.experience.startDate = formatDateStart;
    this.experience.endDate = formatDateEnd;
    this.experience.userId = this.authService.getLoginResponse().userId;
    this.experience.teacherId = this.authService.getLoginResponse().userRoleId;
    this.teacherService.createExperience(this.experience).subscribe(
      (response) => {
        if (response.code === 201 && response.result) {
          this.toastService.emitSuccessMessage(
            'Submitted',
            'Success to update experience teacher'
          );
        }
      },
      (error: HttpErrorResponse) => {
        this.toastService.emitHttpErrorMessage(
          error,
          'Failed to update experience teacher'
        );
      }
    );
  }
}
