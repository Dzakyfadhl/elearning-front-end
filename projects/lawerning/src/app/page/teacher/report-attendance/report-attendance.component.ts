import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceReport } from '../../../model/attendance-report';
import { AuthService } from '../../../service/auth.service';
import { ReportService } from '../../../service/report.service';

@Component({
  selector: 'app-report-attendance',
  templateUrl: './report-attendance.component.html',
  styleUrls: ['./report-attendance.component.css'],
})
export class ReportAttendanceComponent implements OnInit {
  idTeacher: string;
  attendanceReports: AttendanceReport[];
  // attendanceReport: {
  //   courseName: string;
  //   moduleName: string;
  //   date: string;
  //   studentAbsent: number;
  //   studentPresent: number;
  // }[];
  constructor(
    private authService: AuthService,
    private router: Router,
    private reportService: ReportService
  ) {}

  ngOnInit(): void {
    this.idTeacher = this.authService.getLoginResponse().userRoleId;
    console.log(this.idTeacher);

    this.reportService.getAttendanceReportTeacher().subscribe((val) => {
      this.attendanceReports = val.result;
      console.log(this.attendanceReports);
    });
    // this.attendanceReport = [
    //   {
    //     courseName: 'Course Type-001',
    //     moduleName: 'Module Title-0011',
    //     date: '02 Feb 2021',
    //     studentAbsent: 10,
    //     studentPresent: 4,
    //   },
    //   {
    //     courseName: 'Course Type-001',
    //     moduleName: 'Module Title-001',
    //     date: '04 Feb 2021',
    //     studentAbsent: 12,
    //     studentPresent: 2,
    //   },
    //   {
    //     courseName: 'Course Type-001',
    //     moduleName: 'Module Title-001',
    //     date: '04 Feb 2021',
    //     studentAbsent: 12,
    //     studentPresent: 2,
    //   },
    //   {
    //     courseName: 'Course Type-001',
    //     moduleName: 'Module Title-001',
    //     date: '04 Feb 2021',
    //     studentAbsent: 12,
    //     studentPresent: 2,
    //   },
    //   {
    //     courseName: 'Course Type-001',
    //     moduleName: 'Module Title-001',
    //     date: '04 Feb 2021',
    //     studentAbsent: 12,
    //     studentPresent: 2,
    //   },
    //   {
    //     courseName: 'Course Type-001',
    //     moduleName: 'Module Title-001',
    //     date: '04 Feb 2021',
    //     studentAbsent: 12,
    //     studentPresent: 2,
    //   },
    //   {
    //     courseName: 'Course Type-001',
    //     moduleName: 'Module Title-001',
    //     date: '04 Feb 2021',
    //     studentAbsent: 12,
    //     studentPresent: 2,
    //   },
    //   {
    //     courseName: 'Course Type-001',
    //     moduleName: 'Module Title-001',
    //     date: '04 Feb 2021',
    //     studentAbsent: 12,
    //     studentPresent: 2,
    //   },
    //   {
    //     courseName: 'Course Type-001',
    //     moduleName: 'Module Title-001',
    //     date: '04 Feb 2021',
    //     studentAbsent: 12,
    //     studentPresent: 2,
    //   },
    //   {
    //     courseName: 'Course Type-001',
    //     moduleName: 'Module Title-001',
    //     date: '04 Feb 2021',
    //     studentAbsent: 12,
    //     studentPresent: 2,
    //   },
    //   {
    //     courseName: 'Course Type-001',
    //     moduleName: 'Module Title-001',
    //     date: '04 Feb 2021',
    //     studentAbsent: 12,
    //     studentPresent: 2,
    //   },
    //   {
    //     courseName: 'Course Type-001',
    //     moduleName: 'Module Title-001',
    //     date: '04 Feb 2021',
    //     studentAbsent: 12,
    //     studentPresent: 2,
    //   },
    // ];
  }
}
