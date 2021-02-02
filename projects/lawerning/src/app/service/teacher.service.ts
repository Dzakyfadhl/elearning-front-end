import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteTeacherDTO } from '../model/teacher-dto/delete-teacher-request';
import { ResponseModel } from '../model/response-model';
import { TeacherForAdminDTO } from '../model/teacher-dto/teacher-admin-dto';
import { TeacherProfileResponse } from '../model/teacher-dto/teacher-profile-response';
import { TeacherRequestDTO } from '../model/teacher-dto/teacher-request';
import { UpdateTeacherRequestDTO } from '../model/teacher-dto/update-teacher-request';
import Constants from '../constants/constant';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private http: HttpClient) {}

  getAllTeachersForAdmin(): Observable<ResponseModel<TeacherForAdminDTO[]>> {
    return this.http.get<ResponseModel<TeacherForAdminDTO[]>>(
      `${Constants.BASE_URL}/teacher`
    );
  }

  getById(
    teacherId: string
  ): Observable<ResponseModel<TeacherProfileResponse>> {
    return this.http.get<ResponseModel<TeacherProfileResponse>>(
      `${Constants.BASE_URL}/teacher/${teacherId}`
    );
  }

  createTeacherProfile(
    TeacherRequestDTO: TeacherRequestDTO
  ): Observable<TeacherRequestDTO> {
    return this.http.post<TeacherRequestDTO>(
      `${Constants.BASE_URL}/teacher`,
      TeacherRequestDTO
    );
  }

  updateTeacherProfile(
    data: UpdateTeacherRequestDTO
  ): Observable<UpdateTeacherRequestDTO> {
    return this.http.put<UpdateTeacherRequestDTO>(
      `${Constants.BASE_URL}/teacher`,
      data
    );
  }

  deleteTeacher(data: DeleteTeacherDTO): Observable<DeleteTeacherDTO> {
    return this.http.patch<DeleteTeacherDTO>(
      `${Constants.BASE_URL}/teacher`,
      data
    );
  }
}
