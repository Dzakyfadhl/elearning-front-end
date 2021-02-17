import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { DetailCourseResponse } from '../model/detail-course-response';
import { ModuleUpdateRequest } from '../model/module/module-update-request';
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

  getModule(idCourse: string): Observable<ResponseModel<DetailCourseResponse>> {
    return this.http.get<ResponseModel<DetailCourseResponse>>(
      `${Constants.BASE_URL}/public/course/${idCourse}`,
      { params: { studentId: this.auth.getLoginResponse().userRoleId } }
    );
  }

  getModuleStudent(
    idCourse: string
  ): Observable<ResponseModel<DetailCourseResponse>> {
    return this.http.get<ResponseModel<DetailCourseResponse>>(
      `${Constants.BASE_URL}/course/${idCourse}`,
      { params: { studentId: this.auth.getLoginResponse().userRoleId } }
    );
  }

  getModuleAvailable(
    idCourse: string
  ): Observable<ResponseModel<DetailCourseResponse>> {
    return this.http.get<ResponseModel<DetailCourseResponse>>(
      `${Constants.BASE_URL}/public/course/${idCourse}`
    );
  }

  updateModule(module: ModuleUpdateRequest): Promise<ResponseModel<string>> {
    return this.http
      .put<ResponseModel<string>>(`${Constants.BASE_URL}/module`, module)
      .toPromise();
  }
}
