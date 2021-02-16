import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { CourseAllResponse } from '../model/course-all-response';
import { CourseAvailableResponse } from '../model/course-available-response';
import { CourseAdminResponseDTO } from '../model/course-dto/course-admin-response';
import { CourseCreateRequestDTO } from '../model/course-dto/course-create-request';
import { CourseProgressResponse } from '../model/course-dto/course-progress-response';
import { CourseUpdateRequestDTO } from '../model/course-dto/course-update-request';
import { CourseStudentResponse } from '../model/course-student-response';
import { CourseTeacherResponse } from '../model/course-teacher-response';
import { DetailCourseResponse } from '../model/detail-course-response';
import { ResponseModel } from '../model/response-model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getCourseAll(): Observable<ResponseModel<CourseAllResponse[]>> {
    return this.http.get<ResponseModel<CourseAllResponse[]>>(
      `${Constants.BASE_URL}/course/all`
    );
  }

  getAvailableCourse(): Observable<ResponseModel<CourseAvailableResponse[]>> {
    return this.http.get<ResponseModel<CourseAvailableResponse[]>>(
      `${Constants.BASE_URL}/course/available`,
      { params: { id: this.authService.getLoginResponse().userRoleId } }
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

  updateCourse(data: CourseUpdateRequestDTO): Promise<ResponseModel<string>> {
    return this.http
      .put<ResponseModel<string>>(`${Constants.BASE_URL}/course`, data)
      .toPromise();
  }

  getCoursesForAdmin(): Observable<ResponseModel<CourseAdminResponseDTO[]>> {
    return this.http.get<ResponseModel<CourseAdminResponseDTO[]>>(
      `${Constants.BASE_URL}/course/admin`
    );
  }

  registerCourseStudent(idCourse: string): Observable<ResponseModel<any>> {
    return this.http.post<ResponseModel<any>>(
      `${Constants.BASE_URL}/course/register`,
      null,
      {
        params: {
          studentId: this.authService.getLoginResponse().userRoleId,
          courseId: idCourse,
        },
      }
    );
  }

  getCourseProgress(
    idStudent: string
  ): Observable<ResponseModel<CourseProgressResponse[]>> {
    return this.http.get<ResponseModel<CourseProgressResponse[]>>(
      `${Constants.BASE_URL}/course/progress/${idStudent}`
    );
  }

  getDetailCourse(id: string): Promise<ResponseModel<DetailCourseResponse>> {
    return this.http
      .get<ResponseModel<DetailCourseResponse>>(
        `${Constants.BASE_URL}/course/${id}`
      )
      .toPromise();
  }
}
