import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamTeacherComponent } from '@bootcamp-lawerning-page/teacher/exam-teacher/exam-teacher.component';

const routes: Routes = [
  {
    path: 'teacher/exam/:moduleId',
    component: ExamTeacherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamTeacherRoutingModule {}
