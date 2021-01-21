import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardTeacherComponent } from '../../layout/dashboard-teacher/dashboard-teacher.component';
import { ButtonModule } from 'primeng/button';
import { DashboardStudentComponent } from '../../layout/dashboard-student/dashboard-student.component';
import { FieldsetModule } from 'primeng/fieldset';
import { DashboardAdminComponent } from '../../layout/dashboard-admin/dashboard-admin.component';


@NgModule({
  declarations: [
    DashboardTeacherComponent,
    DashboardStudentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FieldsetModule,
    ButtonModule
  ]
})
export class DashboardModule { }
