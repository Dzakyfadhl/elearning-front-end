import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmissionTeacherComponent } from '@bootcamp-lawerning-page/teacher/submission-teacher/submission-teacher.component';
import { SubmissionTeacherModule } from './submission-teacher.module';

const routes: Routes = [
  {
    path: 'submission',
    component: SubmissionTeacherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmissionTeacherRoutingModule {}
