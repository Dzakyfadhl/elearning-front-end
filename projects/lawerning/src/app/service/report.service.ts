import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { ResponseModel } from '../model/response-model';
import { StudentReportResponse } from '../model/student-report-response';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  downloadReporting() {
    let header = new HttpHeaders();
    return this.http.get(
      `${Constants.BASE_URL}/student/report/${
        this.auth.getLoginResponse().userRoleId
      }`,
      { headers: header.set('Accept', 'application/pdf'), responseType: 'blob' }
    );
  }

  getStudentReporting(): Observable<ResponseModel<StudentReportResponse[]>> {
    return this.http.get<ResponseModel<StudentReportResponse[]>>(
      `${Constants.BASE_URL}/student/report?studentId=${
        this.auth.getLoginResponse().userRoleId
      }`
    );
  }
}
