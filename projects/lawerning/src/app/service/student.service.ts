import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/response-model';
import { StudentProfileResponse } from '../model/student-profile-response';
import { StudentByCourseIdResponse } from '../model/student-by-courseid-response';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  baseUrl = 'http://192.168.15.224:8080';

  constructor(private http: HttpClient, private auth: AuthService) {}

  getProfile(): Observable<ResponseModel<StudentProfileResponse>> {
    return this.http.get<ResponseModel<StudentProfileResponse>>(
      `${this.baseUrl}/student/${this.auth.getLoginResponse().userRoleId}`,
      {
        headers: {
          Authorization: `Bearer ${this.auth.getLoginResponse().token}`,
        },
      }
    );
  }

  getStudentByCourseId(
    id: string
  ): Observable<ResponseModel<StudentByCourseIdResponse>> {
    return this.http.get<ResponseModel<StudentByCourseIdResponse>>(
      `${this.baseUrl}/course/${id}/students`,
      {
        headers: {
          Authorization: `Bearer ${this.auth.getLoginResponse().token}`,
        },
      }
    );
  }
}
