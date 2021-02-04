import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/response-model';
import { StudentProfileResponse } from '../model/student-profile-response';
import { StudentByCourseIdResponse } from '../model/student-by-courseid-response';
import { AuthService } from './auth.service';
import Constants from '../constants/constant';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getProfile(): Observable<ResponseModel<StudentProfileResponse>> {
    return this.http.get<ResponseModel<StudentProfileResponse>>(
      `${Constants.BASE_URL}/student/${this.auth.getLoginResponse().userRoleId}`
    );
  }

  getStudentByCourseId(
    id: string
  ): Observable<ResponseModel<StudentByCourseIdResponse>> {
    return this.http.get<ResponseModel<StudentByCourseIdResponse>>(
      `${Constants.BASE_URL}/course/${id}/students`
    );
  }
}
