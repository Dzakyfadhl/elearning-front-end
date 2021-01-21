import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardStudentComponent } from '../../layout/dashboard-student/dashboard-student.component';
import { DashboardAdminComponent } from '../../layout/dashboard-admin/dashboard-admin.component';


@NgModule({
  declarations: [
    DashboardStudentComponent,
    DashboardAdminComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
