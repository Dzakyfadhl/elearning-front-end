import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
<<<<<<< HEAD
import { DashboardTeacherComponent } from '../../layout/teacher/dashboard-teacher/dashboard-teacher.component';
import { ButtonModule } from 'primeng/button';
=======
import { DashboardStudentComponent } from '../../layout/dashboard-student/dashboard-student.component';
>>>>>>> c531f3be50aee205ea889fee012d57351c658966


@NgModule({
  declarations: [
<<<<<<< HEAD
    DashboardTeacherComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonModule
=======
    DashboardStudentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
>>>>>>> c531f3be50aee205ea889fee012d57351c658966
  ]
})
export class DashboardModule { }
