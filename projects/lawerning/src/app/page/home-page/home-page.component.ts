import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import Constants from '../../constants/constant';
import { CourseAllResponse } from '../../model/course-all-response';
import { TeacherForAdminDTO } from '../../model/teacher-dto/teacher-admin-response';
import { TeacherAllResponse } from '../../model/teacher-dto/teacher-all-response';
import { AuthService } from '../../service/auth.service';
import { CourseService } from '../../service/course.service';
import { TeacherService } from '../../service/teacher.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  courses: CourseAllResponse[];
  mentors: TeacherAllResponse[];
  responsiveOptions;
  token: string;
  roleName: string;

  constructor(
    private courseService: CourseService,
    private teacherService: TeacherService,
    private route: Router,
    private auth: AuthService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '568px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    if (!this.auth.getLoginResponse()) {
      this.token = '';
      this.roleName = '';
    } else {
      this.token = this.auth.getLoginResponse().token;
      this.roleName = this.auth.getLoginResponse().role.name;
    }

    this.teacherService.getAllTeachers().subscribe((data) => {
      this.mentors = data.result;

      if (this.mentors.length > 0) {
        this.mentors.forEach((val) => {
          if (!val.photoId) {
            val.photoId = 'assets/images/default.png';
          } else {
            val.photoId = `${Constants.BASE_URL_FILE}/${val.photoId}`;
          }
        });
      }
    });

    this.courseService.getCourseAll().subscribe((result) => {
      this.courses = result.result;

      this.courses.forEach((data) => {
        let start = new Date(data.periodStart);
        let end = new Date(data.periodEnd);
        let diff = end.valueOf() - start.valueOf();

        let oneDay = 1000 * 60 * 60 * 24;
        let day = Math.floor(diff / oneDay);

        data.duration = Math.floor(day / 7);

        data.day = day % 7;

        if (!data.teacher.photoId) {
          data.teacher.photoId = `assets/images/default.png`;
        } else {
          data.teacher.photoId = `${Constants.BASE_URL_FILE}/${data.teacher.photoId}`;
        }
      });
    });
  }

  viewModule(index: number) {
    let tempCourse: CourseAllResponse = this.courses[index];
    let id: string = tempCourse.id;
    this.route.navigate([`/course/module/${id}`]);
  }
}
