import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienceModel } from '../../../model/experience-model';
import { TeacherProfileResponse } from '../../../model/teacher-dto/teacher-profile-response';
import { AuthService } from '../../../service/auth.service';
import { TeacherService } from '../../../service/teacher.service';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProfileTeacher();
  }
  getProfileTeacher() {
    this.teacherService.getById().subscribe((value) => {
      this.profileTeacher = value.result;
      console.log(this.profileTeacher.photoId);

      if (!this.profileTeacher.photoId) {
        this.photo = `assets/images/default.png`;
      } else {
        this.photo = `http://192.168.15.224:8080/file/${this.profileTeacher.photoId}`;
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
    this.teacherService.createExperience(this.experience).subscribe((val) => {
      console.log(val);
      this.isDisplayEx = false;
    });
  }
}
