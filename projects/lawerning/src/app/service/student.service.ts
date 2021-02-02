import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/response-model';
import { StudentProfileResponse } from '../model/student-profile-response';
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
}
