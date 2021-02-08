import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { CourseTypeCreateRequest } from '../model/course-type-dto/course-type-create-request';
import { CourseTypeResponse } from '../model/course-type-dto/course-type-response';
import { CourseTypeUpdateRequestDTO } from '../model/course-type-dto/course-type-update-request';
import { DeleteCourseTypeRequestDTO } from '../model/course-type-dto/delete-course-type-request';
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
      `${Constants.BASE_URL}/course/type`
    );
  }

  insertCourseType(
    data: CourseTypeCreateRequest
  ): Observable<ResponseModel<string>> {
    return this.http.post<ResponseModel<string>>(
      `${Constants.BASE_URL}/course/type`,
      data
    );
  }

  updateCourseType(
    data: CourseTypeUpdateRequestDTO
  ): Observable<ResponseModel<string>> {
    return this.http.put<ResponseModel<string>>(
      `${Constants.BASE_URL}/course/type`,
      data
    );
  }

  deleteCourseTypeById(id: string): Observable<ResponseModel<string>> {
    return this.http.delete<ResponseModel<string>>(
      `${Constants.BASE_URL}/course/type/id/${id}`
    );
  }

  setIsActiveFalse(
    data: DeleteCourseTypeRequestDTO
  ): Observable<DeleteCourseTypeRequestDTO> {
    return this.http.patch<DeleteCourseTypeRequestDTO>(
      `${Constants.BASE_URL}/course/type/false`,
      data
    );
  }

  setIsActiveTrue(
    data: DeleteCourseTypeRequestDTO
  ): Observable<DeleteCourseTypeRequestDTO> {
    return this.http.patch<DeleteCourseTypeRequestDTO>(
      `${Constants.BASE_URL}/course/type/true`,
      data
    );
  }
}
