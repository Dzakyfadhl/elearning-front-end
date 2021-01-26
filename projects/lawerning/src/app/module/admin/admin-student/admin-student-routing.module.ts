import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminStudentComponent } from '@bootcamp-lawerning-page/admin/admin-student/admin-student.component';

const routes: Routes = [
  {
    path: 'student',
    component: AdminStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminStudentRoutingModule { }
