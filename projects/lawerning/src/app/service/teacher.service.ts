import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteTeacherRequest } from '../model/teacher-dto/delete-teacher-request';
import { ResponseModel } from '../model/response-model';
import { TeacherForAdminDTO } from '../model/teacher-dto/teacher-admin-response';
import { TeacherProfileResponse } from '../model/teacher-dto/teacher-profile-response';
import { CreateTeacherRequest } from '../model/teacher-dto/create-teacher-request';
import { UpdateTeacherRequest } from '../model/teacher-dto/update-teacher-request';
import Constants from '../constants/constant';
import { UpdateIsActiveRequestDTO } from '../model/update-isactive-request';
import { AuthService } from './auth.service';
import { ExperienceModel } from '../model/experience-model';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllTeachersForAdmin(): Observable<ResponseModel<TeacherForAdminDTO[]>> {
    return this.http.get<ResponseModel<TeacherForAdminDTO[]>>(
      `${Constants.BASE_URL}/teacher`
    );
  }

  getById(): Observable<ResponseModel<TeacherProfileResponse>> {
    return this.http.get<ResponseModel<TeacherProfileResponse>>(
      `${Constants.BASE_URL}/teacher/${
        this.authService.getLoginResponse().userRoleId
      }`
    );
  }

  createTeacher(
    TeacherRequestDTO: CreateTeacherRequest
  ): Observable<ResponseModel<string>> {
    return this.http.post<ResponseModel<string>>(
      `${Constants.BASE_URL}/teacher`,
      TeacherRequestDTO
    );
  }

  updatePhoto(data: FormData): Observable<ResponseModel<string>> {
    return this.http.put<ResponseModel<string>>(
      `${Constants.BASE_URL}/user/photo`,
      data
    );
  }

  createExperience(data: ExperienceModel): Observable<ResponseModel<string>> {
    return this.http.post<ResponseModel<string>>(
      `${Constants.BASE_URL}/experience`,
      data
    );
  }

  updateTeacherProfile(
    data: UpdateTeacherRequest
  ): Promise<ResponseModel<string>> {
    return this.http
      .put<ResponseModel<string>>(`${Constants.BASE_URL}/teacher`, data)
      .toPromise();
  }

  deleteTeacher(data: DeleteTeacherRequest): Observable<ResponseModel<string>> {
    return this.http.patch<ResponseModel<string>>(
      `${Constants.BASE_URL}/teacher`,
      data
    );
  }

  updateIsActive(
    data: UpdateIsActiveRequestDTO
  ): Observable<ResponseModel<string>> {
    return this.http.patch<ResponseModel<string>>(
      `${Constants.BASE_URL}/teacher`,
      data
    );
  }
  getAllTeachers(): Observable<ResponseModel<TeacherForAdminDTO[]>> {
    return this.http.get<ResponseModel<TeacherForAdminDTO[]>>(
      `${Constants.BASE_URL}/public/teachers`
    );
  }
}
