import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardStudentComponent } from '../../layout/dashboard-student/dashboard-student.component';

const routes: Routes = [
  {
    path: 'dashboard-student',
    component: DashboardStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
