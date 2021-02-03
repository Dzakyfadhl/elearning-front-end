import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailCourseResponse } from '../model/detail-course-response';
import { ResponseModel } from '../model/response-model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DetailCourseTeacherService {
  baseUrl = 'http://192.168.15.224:8080';
  constructor(private http: HttpClient, private authService: AuthService) {}

  getDetailCourseTeacher(
    id: string
  ): Observable<ResponseModel<DetailCourseResponse>> {
    return this.http.get<ResponseModel<DetailCourseResponse>>(
      `${this.baseUrl}/module/course/${id}`,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }
}
