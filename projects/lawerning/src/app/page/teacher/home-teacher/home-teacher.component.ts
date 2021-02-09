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

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.showCourseTeacher();
  }

  showCourseTeacher() {
    this.courseService.getCourseTeacher().subscribe((value) => {
      this.courses = value.result;
      console.log(this.courses);
    });
  }

  viewModule(index: number) {
    let tempCourses: any = this.courses[index];
    let courseId = tempCourses.id;
    console.log(courseId);
    this.router.navigate([`/teacher/module/${courseId}`]);
  }
}
