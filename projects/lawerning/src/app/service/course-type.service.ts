import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { CourseTypeCreateRequest } from '../model/course-type-dto/course-type-create-request';
import { CourseTypeResponse } from '../model/course-type-dto/course-type-response';
import { CourseTypeUpdateRequestDTO } from '../model/course-type-dto/course-type-update-request';
import { ResponseModel } from '../model/response-model';
import { SubjectCategoryUpdateRequestDTO } from '../model/subject-category-dto/subject-category-update-request';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CourseTypeService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getListCourseType(): Observable<ResponseModel<CourseTypeResponse[]>> {
    return this.http.get<ResponseModel<CourseTypeResponse[]>>(
      `${Constants.BASE_URL}/course/category`
    );
  }

  insertCourseType(
    data: CourseTypeCreateRequest
  ): Observable<CourseTypeCreateRequest> {
    return this.http.post<CourseTypeCreateRequest>(
      `${Constants.BASE_URL}/course/category`,
      data
    );
  }

  updateCourseType(
    data: CourseTypeUpdateRequestDTO
  ): Observable<CourseTypeUpdateRequestDTO> {
    return this.http.put<CourseTypeUpdateRequestDTO>(
      `${Constants.BASE_URL}/course/category`,
      data
    );
  }

  deleteCourseTypeById(id: string): Observable<any> {
    return this.http.delete<any>(`${Constants.BASE_URL}/course/category/${id}`);
  }
}
