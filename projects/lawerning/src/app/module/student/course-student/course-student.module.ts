import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseStudentRoutingModule } from './course-student-routing.module';
import { CoursesStudentComponent } from '@bootcamp-lawerning-page/student/courses-student/courses-student.component';
import { ModuleCourseModule } from '../module-course/module-course.module';


@NgModule({
  declarations: [CoursesStudentComponent],
  imports: [
    CommonModule,
    CourseStudentRoutingModule,
    ModuleCourseModule
  ]
})
export class CourseStudentModule { }
