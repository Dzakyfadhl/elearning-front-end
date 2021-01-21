import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from '@bootcamp-lawerning-page/admin/home-admin/home-admin.component';
import { AdminCourseModule } from './admin-course/admin-course.module';
import { AdminSubjectModule } from './admin-subject/admin-subject.module';
import { AdminTeacherModule } from './admin-teacher/admin-teacher.module';


@NgModule({
  declarations: [
    HomeAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCourseModule,
    AdminSubjectModule,
    AdminTeacherModule
  ]
})
export class AdminModule { }
