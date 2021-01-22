import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseTeacherRoutingModule } from './course-teacher-routing.module';
import { CourseTeacherComponent } from '@bootcamp-lawerning-page/teacher/course-teacher/course-teacher.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    CourseTeacherComponent
  ],
  imports: [
    CommonModule,
    CourseTeacherRoutingModule,
    ButtonModule
  ]
})
export class CourseTeacherModule { }
