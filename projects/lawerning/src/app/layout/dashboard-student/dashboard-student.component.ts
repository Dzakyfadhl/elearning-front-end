import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Constants from '../../constants/constant';
import { AuthService } from '../../service/auth.service';
import { CourseService } from '../../service/course.service';
@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrls: ['./dashboard-student.component.css'],
})
export class DashboardStudentComponent implements OnInit {
  photo: any;
  name: string;

  constructor(
    private authService: AuthService,
    private route: Router,
    private auth: AuthService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    console.log(this.auth.getLoginResponse().photoId);

    if (!this.auth.getLoginResponse().photoId) {
      this.photo = 'assets/images/default.png';
    } else {
      this.photo = `${Constants.BASE_URL_FILE}/${
        this.auth.getLoginResponse().photoId
      }`;
    }
    if (!this.auth.getLoginResponse()) {
      this.name = '';
    } else {
      this.name = `${this.auth.getLoginResponse().firstName}`;
    }
  }

  signOut() {
    this.authService.signOut();
    this.route.navigateByUrl('home-page');
  }

  // showStudentCourse() {
  //   let id = this.auth.getLoginResponse().userRoleId;
  //   this.route.navigate([`/student/${id}/course`]);
  // }
}
