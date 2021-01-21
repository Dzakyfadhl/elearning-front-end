import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAdminComponent } from '../../layout/dashboard-admin/dashboard-admin.component';
import { DashboardStudentComponent } from '../../layout/dashboard-student/dashboard-student.component';
import { DashboardTeacherComponent } from '../../layout/dashboard-teacher/dashboard-teacher.component';

const routes: Routes = [
  {
    path: 'dashboard-teacher',
    component: DashboardTeacherComponent
  },
  {
    path: 'dashboard-student',
    component: DashboardStudentComponent
  },
  {
    path: 'dashboard-admin',
    component: DashboardAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
