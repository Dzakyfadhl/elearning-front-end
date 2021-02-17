import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseProgressResponse } from '../../../model/course-dto/course-progress-response';
import { CourseStudentResponse } from '../../../model/course-student-response';
import { AuthService } from '../../../service/auth.service';
import { CourseService } from '../../../service/course.service';

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
  isEmpty: boolean = true;

  courses: CourseStudentResponse[];
  isPast: boolean;

  valueProgress = new Map<string, any>();

  constructor(
    private route: Router,
    private auth: AuthService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    let date = new Date();

    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();

    this.courseService
      .getStudentCourse(this.auth.getLoginResponse().userRoleId)
      .subscribe((value) => {
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
          if (data.teacher.photoId == '') {
            data.teacher.photoId = 'assets/images/default.png';
          } else {
            data.teacher.photoId = `http://192.168.15.224:8080/file/${data.teacher.photoId}`;
          }
          if (month >= periodMonth && day > periodDay) {
            this.isCompleted = true;
            data.isCompleted = this.isCompleted;
          } else {
            this.isCompleted = false;
            data.isCompleted = this.isCompleted;
          }
        });
        // console.log(this.courses);
        console.log(this.valueProgress);
      });
  }
  viewModule(index: number) {
    let tempCourse: CourseStudentResponse = this.courses[index];
    let courseId = tempCourse.id;
    this.route.navigate([`/student/course/${courseId}`]);
  }
}
