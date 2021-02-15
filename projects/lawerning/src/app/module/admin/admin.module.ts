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
import { ChartModule } from 'primeng/chart';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faBookOpen,
  faGraduationCap,
  faTachometerAlt,
  faTags,
  faUserGraduate,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { faLeanpub } from '@fortawesome/free-brands-svg-icons';
import { AdminModuleModule } from './admin-course/admin-module/admin-module.module';

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
    AdminModuleModule,
    ChartModule,
    FontAwesomeModule,
  ],
})
export class AdminModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faTachometerAlt,
      faUserGraduate,
      faUsers,
      faGraduationCap,
      faBookOpen,
      faTags,
      faLeanpub
    );
  }
}
