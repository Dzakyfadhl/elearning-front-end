import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardTeacherComponent } from '../../layout/teacher/dashboard-teacher/dashboard-teacher.component';

const routes: Routes = [
  {
    path: 'dashboard-teacher',
    component: DashboardTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
