import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardTeacherComponent } from '../../layout/dashboard-teacher/dashboard-teacher.component';
import { ButtonModule } from 'primeng/button';
import { DashboardStudentComponent } from '../../layout/dashboard-student/dashboard-student.component';


@NgModule({
  declarations: [
    DashboardTeacherComponent,
    DashboardStudentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonModule
  ]
})
export class DashboardModule { }
