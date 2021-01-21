import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardTeacherComponent } from '../../layout/teacher/dashboard-teacher/dashboard-teacher.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    DashboardTeacherComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ButtonModule
  ]
})
export class DashboardModule { }
