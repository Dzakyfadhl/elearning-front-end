import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CourseService } from '../../service/course.service';
@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrls: ['./dashboard-student.component.css'],
})
export class DashboardStudentComponent implements OnInit {
  photo: any;

  constructor(
    private authService: AuthService,
    private route: Router,
    private auth: AuthService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    console.log(this.auth.getLoginResponse().photoId);

    if (this.auth.getLoginResponse().photoId == 'null') {
      this.photo = 'assets/images/default.png';
    } else {
      this.photo = `http://192.168.15.224:8080/file/${
        this.auth.getLoginResponse().photoId
      }`;
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
