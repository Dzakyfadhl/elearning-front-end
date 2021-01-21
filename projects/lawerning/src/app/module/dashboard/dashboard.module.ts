import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardStudentComponent } from '../../layout/dashboard-student/dashboard-student.component';
import { FieldsetModule } from 'primeng/fieldset';


@NgModule({
  declarations: [
    DashboardStudentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FieldsetModule
  ]
})
export class DashboardModule { }
