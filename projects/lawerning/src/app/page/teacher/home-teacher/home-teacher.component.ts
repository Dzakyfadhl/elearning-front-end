import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseTeacherResponse } from '../../../model/course-teacher-response';
import { CourseService } from '../../../service/course.service';

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrls: ['./home-teacher.component.css'],
})
export class HomeTeacherComponent implements OnInit {
  courses: CourseTeacherResponse[];
  totalModule = 0;
  totalStudent = 0;
  totalCourse = 0;
  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.showCourseTeacher();
  }

  showCourseTeacher() {
    this.courseService.getCourseTeacher().subscribe((value) => {
      this.courses = value.result;
      console.log(this.courses);
      for (let i = 0; i < this.courses.length; i++) {
        this.totalModule = this.totalModule + this.courses[i].totalModule;
        this.totalStudent = this.totalStudent + this.courses[i].totalStudent;
      }
      this.totalCourse = this.courses.length;
      console.log(this.totalStudent);
      console.log(this.totalModule);
    });
  }

  viewModule(index: number) {
    let tempCourses: any = this.courses[index];
    let courseId = tempCourses.id;
    console.log(courseId);
    this.router.navigate([`/teacher/module/${courseId}`]);
  }
}
