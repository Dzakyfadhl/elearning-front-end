import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Constants from '../../../constants/constant';
import { CourseProgressResponse } from '../../../model/course-dto/course-progress-response';
import { CourseStudentResponse } from '../../../model/course-student-response';
import { AuthService } from '../../../service/auth.service';
import { CourseService } from '../../../service/course.service';
import { LoadingService } from '../../../service/loading.service';

@Component({
  selector: 'app-courses-student',
  templateUrl: './courses-student.component.html',
  styleUrls: ['./courses-student.component.css'],
})
export class CoursesStudentComponent implements OnInit {
  course: any = {};
  result: any = [];
  studentId: string;
  isCompleted: boolean;
  isEmpty: boolean = false;

  courses: CourseStudentResponse[];
  isPast: boolean;

  valueProgress = new Map<string, any>();

  constructor(
    private route: Router,
    private auth: AuthService,
    private courseService: CourseService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    let date = new Date();

    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();

    this.loadingService.emitStatus(true);

    this.courseService
      .getStudentCourse(this.auth.getLoginResponse().userRoleId)
      .subscribe(
        (value) => {
          this.courses = value.result;

          if (this.courses.length > 0) {
            this.isEmpty = false;
          } else {
            this.isEmpty = true;
          }

          this.courses.forEach((data) => {
            let dateObj = new Date(data.periodEnd);
            let periodMonth = dateObj.getUTCMonth() + 1;
            let periodDay = dateObj.getUTCDate();
            if (!data.teacher.experience) {
              data.teacher.experience = 'Experience not yet';
            } else {
              data.teacher.experience = data.teacher.experience;
            }
            if (!data.teacher.photoId) {
              data.teacher.photoId = 'assets/images/default.png';
            } else {
              data.teacher.photoId = `${Constants.BASE_URL_FILE}/${data.teacher.photoId}`;
            }
            if (month >= periodMonth && day > periodDay) {
              this.isCompleted = true;
              data.isCompleted = this.isCompleted;
            } else {
              this.isCompleted = false;
              data.isCompleted = this.isCompleted;
            }
          });
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.loadingService.emitStatus(false);
        }
      );
  }
  viewModule(index: number) {
    let tempCourse: CourseStudentResponse = this.courses[index];
    let courseId = tempCourse.id;
    this.route.navigate([`/student/course/${courseId}`]);
  }
}
