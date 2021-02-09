import { Component, OnInit } from '@angular/core';
import { report } from 'process';
import { StudentReportResponse } from '../../../model/student-report-response';
import { AuthService } from '../../../service/auth.service';
import { ReportService } from '../../../service/report.service';

@Component({
  selector: 'app-score-detail',
  templateUrl: './score-detail.component.html',
  styleUrls: ['./score-detail.component.css'],
})
export class ScoreDetailComponent implements OnInit {
  cols: any[];

  reports: StudentReportResponse[];

  first = 0;

  rows = 10;

  studentId: string;

  constructor(
    private reportService: ReportService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.studentId = this.auth.getLoginResponse().userRoleId;
    this.reportService.getStudentReporting().subscribe(
      (value) => {
        this.reports = value.result;
        console.log(this.reports);
      },
      (error) => {
        if (error.error.code != 200) {
          this.reports = [];
          console.log(this.reports.length);

          console.log(error);
        }
      }
    );
  }
  downloadReport() {
    this.reportService.downloadReporting().subscribe((val) => console.log(val));
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }
  isLastPage(): boolean {
    return this.reports ? this.first === this.reports.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.reports ? this.first === 0 : true;
  }
}
