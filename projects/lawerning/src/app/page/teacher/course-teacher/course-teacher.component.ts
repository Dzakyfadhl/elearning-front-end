import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseTeacherResponse } from '../../../model/course-teacher-response';
import { CourseService } from '../../../service/course.service';

@Component({
  selector: 'app-course-teacher',
  templateUrl: './course-teacher.component.html',
  styleUrls: ['./course-teacher.component.css'],
})
export class CourseTeacherComponent implements OnInit {
  isEmpty = false;
  courses: CourseTeacherResponse[];

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    // this.courseService.getCourseTeacher().subscribe((value) => {
    //   this.courses = value.result;
    //   console.log(this.courses);
    // });
    // console.log(this.courses.length);
    // if (this.courses.length == 0) {
    //   this.isEmpty = true;
    // }
  }

  viewModule(index: number) {
    let tempCourses: any = this.courses[index];
    let courseId = tempCourses.id;
    console.log(courseId);
    this.router.navigateByUrl(`/list-module-teacher/${courseId}`);
  }
}
