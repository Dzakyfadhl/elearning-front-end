import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/response-model';
import { StudentResponse } from '../model/student/student-response';
import { StudentByCourseIdResponse } from '../model/student-by-courseid-response';
import { AuthService } from './auth.service';
import Constants from '../constants/constant';
import { StudentUpdateRequest } from '../model/student/student-edit-request';
import { StudentRegisterRequest } from '../model/student-register-request';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getProfile(): Observable<ResponseModel<StudentResponse>> {
    return this.http.get<ResponseModel<StudentResponse>>(
      `${Constants.BASE_URL}/student/dashboard/${
        this.authService.getLoginResponse().userRoleId
      }`
    );
  }
  updatePhoto(data: FormData): Observable<ResponseModel<string>> {
    return this.http.put<ResponseModel<string>>(
      `${Constants.BASE_URL}/user/photo`,
      data
    );
  }

  updateProfile(data: StudentUpdateRequest): Observable<ResponseModel<string>> {
    return this.http.put<ResponseModel<string>>(
      `${Constants.BASE_URL}/student`,
      data
    );
  }

  getStudentByCourseId(
    id: string
  ): Observable<ResponseModel<StudentByCourseIdResponse[]>> {
    return this.http.get<ResponseModel<StudentByCourseIdResponse[]>>(
      `${Constants.BASE_URL}/course/${id}/students`
    );
  }
  getAllStudent(): Promise<ResponseModel<StudentResponse[]>> {
    return this.http
      .get<ResponseModel<StudentResponse[]>>(
        `${Constants.BASE_URL}/student/all`
      )
      .toPromise();
  }

  updateStudent(request: StudentUpdateRequest): Promise<ResponseModel<string>> {
    return this.http
      .put<ResponseModel<string>>(`${Constants.BASE_URL}/student`, request)
      .toPromise();
  }

  deleteStudent(studentId: string): Promise<ResponseModel<string>> {
    return this.http
      .delete<ResponseModel<string>>(`${Constants.BASE_URL}/student`, {
        params: {
          id: studentId,
          updatedBy: this.authService.getUserId(),
        },
      })
      .toPromise();
  }

  insertStudent(
    data: StudentRegisterRequest
  ): Observable<ResponseModel<StudentRegisterRequest>> {
    return this.http.post<ResponseModel<StudentRegisterRequest>>(
      `${Constants.BASE_URL}/student/register`,
      data
    );
  }

  verifyStudent(
    studentCourseId: string,
    teacherId: string,
    email: string
  ): Observable<ResponseModel<StudentByCourseIdResponse>> {
    return this.http.put<ResponseModel<StudentByCourseIdResponse>>(
      `${Constants.BASE_URL}/teacher/verify/student`,
      null,
      {
        params: {
          studentCourseId: studentCourseId,
          teacherId: teacherId,
          email: email,
        },
      }
    );
  }
}
