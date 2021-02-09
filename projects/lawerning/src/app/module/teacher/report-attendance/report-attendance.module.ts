import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportAttendanceRoutingModule } from './report-attendance-routing.module';
import { ReportAttendanceComponent } from '@bootcamp-lawerning-page/teacher/report-attendance/report-attendance.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ReportAttendanceComponent],
  imports: [
    CommonModule,
    ReportAttendanceRoutingModule,
    TableModule,
    ButtonModule,
  ],
})
export class ReportAttendanceModule {}
