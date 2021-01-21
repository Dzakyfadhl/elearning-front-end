import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardStudentComponent } from '../../layout/dashboard-student/dashboard-student.component';
import { DashboardAdminComponent } from '../../layout/dashboard-admin/dashboard-admin.component';
import { DashboardTeacherComponent } from '../../layout/dashboard-teacher/dashboard-teacher.component';


@NgModule({
  declarations: [
    DashboardStudentComponent,
    DashboardAdminComponent,
    DashboardTeacherComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
