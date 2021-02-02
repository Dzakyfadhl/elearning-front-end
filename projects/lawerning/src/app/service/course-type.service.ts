import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseTypeCreateRequest } from '../model/course-type-dto/course-type-create-request';
import { CourseTypeResponse } from '../model/course-type-dto/course-type-response';
import { CourseTypeUpdateRequestDTO } from '../model/course-type-dto/course-type-update-request';
import { ResponseModel } from '../model/response-model';
import { SubjectCategoryUpdateRequestDTO } from '../model/subject-category-dto/subject-category-update-request';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseTypeService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getListCourseType(): Observable<ResponseModel<CourseTypeResponse[]>> {
    return this.http.get<ResponseModel<CourseTypeResponse[]>>(`http://192.168.13.87:8080/course/category`,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }

  insertCourseType(data: CourseTypeCreateRequest): Observable<CourseTypeCreateRequest> {
    return this.http.post<CourseTypeCreateRequest>(`http://192.168.13.87:8080/course/category`, data ,
    {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }

  updateCourseType(data: CourseTypeUpdateRequestDTO): Observable<CourseTypeUpdateRequestDTO> {
    return this.http.put<CourseTypeUpdateRequestDTO>(`http://192.168.13.87:8080/course/category`, data ,
    {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }
  
  deleteCourseTypeById(id: string): Observable<any> {
    return this.http.delete<any>(`http://192.168.13.87:8080/course/category/${id}` ,
    {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }




}
