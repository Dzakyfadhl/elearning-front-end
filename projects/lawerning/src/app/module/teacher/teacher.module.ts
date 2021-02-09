import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { HomeTeacherComponent } from '@bootcamp-lawerning-page/teacher/home-teacher/home-teacher.component';
import { CourseTeacherModule } from './course-teacher/course-teacher.module';
import { ModuleTeacherModule } from './module-teacher/module-teacher.module';
import { DtlModuleModule } from './dtl-module/dtl-module.module';
import { ProfileTeacherModule } from './profile-teacher/profile-teacher.module';
import { CalendarModule } from 'primeng/calendar';
import { SubmissionTeacherModule } from './submission-teacher/submission-teacher.module';
import { ExamTeacherModule } from './exam-teacher/exam-teacher.module';
import { ReportAttendanceModule } from './report-attendance/report-attendance.module';

@NgModule({
  declarations: [HomeTeacherComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    CourseTeacherModule,
    ModuleTeacherModule,
    DtlModuleModule,
    ProfileTeacherModule,
    CalendarModule,
    SubmissionTeacherModule,
    ExamTeacherModule,
    ReportAttendanceModule,
  ],
})
export class TeacherModule {}
