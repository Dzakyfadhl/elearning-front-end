import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { AttendanceRequest } from '../model/attendance-request';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  constructor(private http: HttpClient) {}

  attendanceStudent(data: AttendanceRequest): Observable<any> {
    return this.http.post<any>(
      `${Constants.BASE_URL}/attendance/student`,
      data
    );
  }
}
