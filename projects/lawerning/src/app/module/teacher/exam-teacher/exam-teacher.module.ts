import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamTeacherRoutingModule } from './exam-teacher-routing.module';
import { ExamTeacherComponent } from '@bootcamp-lawerning-page/teacher/exam-teacher/exam-teacher.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [ExamTeacherComponent],
  imports: [
    CommonModule,
    ExamTeacherRoutingModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
  ],
})
export class ExamTeacherModule {}
