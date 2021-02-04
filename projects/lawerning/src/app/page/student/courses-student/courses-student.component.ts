import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  courses: CourseStudentResponse[];

  constructor(
    private route: Router,
    private auth: AuthService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    let date = new Date('2021-03-07');

    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();

    console.log(month, day);

    this.courseService
      .getStudentCourse(this.auth.getLoginResponse().userRoleId)
      .subscribe((value) => {
        this.courses = value.result;
        this.courses.forEach((data) => {
          let dateObj = new Date(data.periodEnd);
          let periodMonth = dateObj.getUTCMonth() + 1;
          let periodDay = dateObj.getUTCDate();
          console.log(periodMonth, periodDay);
          if (month >= periodMonth && day > periodDay) {
            this.isCompleted = true;
            data.isCompleted = this.isCompleted;
            console.log('completed');
          } else {
            this.isCompleted = false;
            data.isCompleted = this.isCompleted;
            console.log('process');
          }
        });
        console.log(this.courses);
      });
  }
  viewModule(index: number) {
    let tempCourse: CourseStudentResponse = this.courses[index];
    let courseId = tempCourse.id;
    this.studentId = this.auth.getLoginResponse().userRoleId;
    // this.route.navigateByUrl('module/course');
    this.route.navigate([`/course/${courseId}/student/${this.studentId}`]);
    // this.route.navigate(['/course/', courseId, '/student/', this.studentId]);
  }
}
