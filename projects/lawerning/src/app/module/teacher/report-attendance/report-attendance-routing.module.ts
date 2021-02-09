import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportAttendanceComponent } from '@bootcamp-lawerning-page/teacher/report-attendance/report-attendance.component';

const routes: Routes = [
  {
    path: 'report/attendance',
    component: ReportAttendanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportAttendanceRoutingModule {}
