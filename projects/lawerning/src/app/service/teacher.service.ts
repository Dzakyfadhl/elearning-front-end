import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteTeacherDTO } from '../model/teacher-dto/delete-teacher-request';
import { ResponseModel } from '../model/response-model';
import { TeacherForAdminDTO } from '../model/teacher-dto/teacher-admin-dto';
import { TeacherProfileResponse } from '../model/teacher-dto/teacher-profile-response';
import { TeacherRequestDTO } from '../model/teacher-dto/teacher-request';
import { UpdateTeacherRequestDTO } from '../model/teacher-dto/update-teacher-request';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllTeachersForAdmin(): Observable<ResponseModel<TeacherForAdminDTO[]>> {
    return this.http.get<ResponseModel<TeacherForAdminDTO[]>>(`http://192.168.13.87:8080/teacher`,
    {
      headers: {
        Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
      },
    }
    );
  }

  getById(token: string, teacherId: string): Observable<ResponseModel<TeacherProfileResponse>> {
    return this.http.get<ResponseModel<TeacherProfileResponse>>(`http://192.168.13.87:8080/teacher/${teacherId}`, 
    {
      headers: {
        Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
      },
    }
    );
  }

  createTeacherProfile(TeacherRequestDTO: TeacherRequestDTO): Observable<TeacherRequestDTO> {
    return this.http.post<TeacherRequestDTO>(`http://192.168.13.87:8080/teacher`, TeacherRequestDTO ,
    {
      headers: {
        Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
      },
    }
    );
  }

  updateTeacherProfile(data: UpdateTeacherRequestDTO): Observable<UpdateTeacherRequestDTO> {
    return this.http.put<UpdateTeacherRequestDTO>(`http://192.168.13.87:8080/teacher`, data,
    {
      headers: {
        Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
      },
    }
    );
  }

  deleteTeacher(data: DeleteTeacherDTO): Observable<DeleteTeacherDTO> {
    return this.http.patch<DeleteTeacherDTO>(`http://192.168.13.87:8080/teacher`, data,
    {
      headers: {
        Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
      },
    }
    );
  }
}
