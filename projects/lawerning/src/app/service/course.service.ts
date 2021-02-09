import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { CourseAvailableResponse } from '../model/course-available-response';
import { CourseAdminResponseDTO } from '../model/course-dto/course-admin-response';
import { CourseCreateRequestDTO } from '../model/course-dto/course-create-request';
import { CourseUpdateRequestDTO } from '../model/course-dto/course-update-request';
import { CourseStudentResponse } from '../model/course-student-response';
import { CourseTeacherResponse } from '../model/course-teacher-response';
import { ResponseModel } from '../model/response-model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAvailableCourse(): Observable<ResponseModel<CourseAvailableResponse[]>> {
    return this.http.get<ResponseModel<CourseAvailableResponse[]>>(
      `${Constants.BASE_URL}/course/available?id=${
        this.authService.getLoginResponse().userRoleId
      }`
    );
  }

  getStudentCourse(
    id: string
  ): Observable<ResponseModel<CourseStudentResponse[]>> {
    return this.http.get<ResponseModel<CourseStudentResponse[]>>(
      `${Constants.BASE_URL}/student/${id}/course`
    );
  }

  getCourseTeacher(): Observable<ResponseModel<CourseTeacherResponse[]>> {
    return this.http.get<ResponseModel<CourseTeacherResponse[]>>(
      `${Constants.BASE_URL}/teacher/dashboard/${
        this.authService.getLoginResponse().userRoleId
      }`
    );
  }

  insertCourse(
    data: CourseCreateRequestDTO
  ): Observable<ResponseModel<string>> {
    return this.http.post<ResponseModel<string>>(
      `${Constants.BASE_URL}/course`,
      data
    );
  }

  updateCourse(
    data: CourseUpdateRequestDTO
  ): Observable<CourseUpdateRequestDTO> {
    return this.http.put<CourseUpdateRequestDTO>(
      `${Constants.BASE_URL}/course`,
      data
    );
  }

  getCoursesForAdmin(): Observable<ResponseModel<CourseAdminResponseDTO[]>> {
    return this.http.get<ResponseModel<CourseAdminResponseDTO[]>>(
      `${Constants.BASE_URL}/course/admin`
    );
  }
}
