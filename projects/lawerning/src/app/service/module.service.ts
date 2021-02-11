import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { DetailCourseResponse } from '../model/detail-course-response';
import { ResponseModel } from '../model/response-model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  // getModuleAvailable(
  //   idCourse: string,
  //   idStudent: string
  // ): Observable<ResponseModel<DetailCourseResponse>> {
  //   return this.http.get<ResponseModel<DetailCourseResponse>>(
  //     `${Constants.BASE_URL}/course/${idCourse}?studentId=${idStudent}`
  //   );
  // }

  getModuleStudent(
    idCourse: string
  ): Observable<ResponseModel<DetailCourseResponse>> {
    return this.http.get<ResponseModel<DetailCourseResponse>>(
      `${Constants.BASE_URL}/course/${idCourse}`,
      { params: { studentId: this.auth.getLoginResponse().userRoleId } }
    );
  }

  getModule(idCourse: string): Observable<ResponseModel<DetailCourseResponse>> {
    return this.http.get<ResponseModel<DetailCourseResponse>>(
      `${Constants.BASE_URL}/course/${idCourse}`
    );
  }
}
