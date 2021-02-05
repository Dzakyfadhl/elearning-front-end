import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionTeacherRoutingModule } from './submission-teacher-routing.module';
import { SubmissionTeacherComponent } from '@bootcamp-lawerning-page/teacher/submission-teacher/submission-teacher.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { BlockUIModule } from 'primeng/blockui';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [SubmissionTeacherComponent],
  imports: [
    CommonModule,
    SubmissionTeacherRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    BlockUIModule,
    FormsModule,
  ],
})
export class SubmissionTeacherModule {}
