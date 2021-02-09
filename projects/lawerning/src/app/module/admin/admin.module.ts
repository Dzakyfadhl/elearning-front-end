import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from '@bootcamp-lawerning-page/admin/home-admin/home-admin.component';
import { AdminCourseModule } from './admin-course/admin-course.module';
import { AdminSubjectModule } from './admin-subject/admin-subject.module';
import { AdminTeacherModule } from './admin-teacher/admin-teacher.module';
import { AdminCourseTypeModule } from './admin-course-type/admin-course-type.module';
import { AdminStudentModule } from './admin-student/admin-student.module';
import { AdminCourseCategoryModule } from './admin-course-category/admin-course-category.module';

@NgModule({
  declarations: [HomeAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCourseModule,
    AdminSubjectModule,
    AdminTeacherModule,
    AdminCourseTypeModule,
    AdminStudentModule,
    AdminCourseCategoryModule,
  ],
})
export class AdminModule {}
