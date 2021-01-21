import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { HomeTeacherComponent } from '@bootcamp-lawerning-page/teacher/home-teacher/home-teacher.component';
import {ButtonModule} from 'primeng/button';
import { CourseTeacherComponent } from '@bootcamp-lawerning-page/teacher/course-teacher/course-teacher.component';
import { ModuleTeacherComponent } from '@bootcamp-lawerning-page/teacher/module-teacher/module-teacher.component';

@NgModule({
  declarations: [
    HomeTeacherComponent,
    CourseTeacherComponent,
    ModuleTeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ButtonModule
  ]
})
export class TeacherModule { }
