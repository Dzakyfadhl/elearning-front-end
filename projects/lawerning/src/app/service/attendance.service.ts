import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { AttendanceRequest } from '../model/attendance-request';
import { AttendanceResponse } from '../model/attendance-response';
import { ResponseModel } from '../model/response-model';
import { VerifyAttendance } from '../model/verify-attendance';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  attendanceStudent(data: AttendanceRequest): Observable<any> {
    return this.http.post<any>(
      `${Constants.BASE_URL}/attendance/student`,
      data
    );
  }

  getAttendanceStudent(
    idCourse: string,
    idModule: string
  ): Observable<ResponseModel<AttendanceResponse>> {
    return this.http.get<ResponseModel<AttendanceResponse>>(
      `${Constants.BASE_URL}/attendance?idCourse=${idCourse}&idModule=${idModule}`
    );
  }

  verifyAttendanceStudent(
    data: VerifyAttendance
  ): Observable<ResponseModel<VerifyAttendance>> {
    return this.http.patch<ResponseModel<VerifyAttendance>>(
      `${Constants.BASE_URL}/attendance`,
      data
    );
  }
}
