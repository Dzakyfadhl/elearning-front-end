import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCourseRoutingModule } from './admin-course-routing.module';
import { AdminCourseComponent } from '../../../page/admin/admin-course/admin-course.component';
import { ModifAdminCourseComponent } from '../../../page/admin/admin-course/modif-admin-course/modif-admin-course.component';


@NgModule({
  declarations: [AdminCourseComponent, ModifAdminCourseComponent],
  imports: [
    CommonModule,
    AdminCourseRoutingModule
  ]
})
export class AdminCourseModule { }
