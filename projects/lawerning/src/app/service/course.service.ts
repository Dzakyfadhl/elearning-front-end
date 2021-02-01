import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseAvailableResponse } from '../model/course-available-response';
import { ResponseModel } from '../model/response-model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  baseUrl = 'http://192.168.13.87:8080/course/available';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAvailableCourse(): Observable<ResponseModel<CourseAvailableResponse[]>> {
    return this.http.get<ResponseModel<CourseAvailableResponse[]>>(
      this.baseUrl,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }
}
