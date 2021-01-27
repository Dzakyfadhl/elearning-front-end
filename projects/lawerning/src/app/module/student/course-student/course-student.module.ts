import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseStudentRoutingModule } from './course-student-routing.module';
import { CoursesStudentComponent } from '@bootcamp-lawerning-page/student/courses-student/courses-student.component';
import { ModuleCourseModule } from '../module-course/module-course.module';
import { ModuleDetailModule } from '../module-detail/module-detail.module';
import { ProfileStudentComponent } from '@bootcamp-lawerning-page/student/profile-student/profile-student.component';
import { ProfileStudentModule } from '../profile-student/profile-student.module';
import { ScoreDetailModule } from '../score-detail/score-detail.module';


@NgModule({
  declarations: [CoursesStudentComponent],
  imports: [
    CommonModule,
    CourseStudentRoutingModule,
    ModuleCourseModule,
    ModuleDetailModule,
    ProfileStudentModule,
    ScoreDetailModule
  ]
})
export class CourseStudentModule { }
