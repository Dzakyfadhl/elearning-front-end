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
  courseProgress: CourseProgressResponse[];

  constructor(
    private route: Router,
    private auth: AuthService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    let date = new Date();

    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();

    console.log(month, day);
    this.courseService
      .getCourseProgress(this.auth.getLoginResponse().userRoleId)
      .subscribe((data) => {
        this.courseProgress = data.result;
        if (this.courseProgress.length > 0) {
          this.courseProgress.forEach((res) => {
            let val = (res.moduleComplete / res.totalModule) * 100;
            res.value = Math.ceil(val);
            if (isNaN(res.value)) {
              res.value = 0;
            }
          });
        }
      });

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
          console.log(periodMonth, periodDay);
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
