import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardStudentComponent } from '../../layout/dashboard-student/dashboard-student.component';


@NgModule({
  declarations: [
    DashboardStudentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
