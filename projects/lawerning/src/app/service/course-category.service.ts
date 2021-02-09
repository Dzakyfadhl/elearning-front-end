import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { CourseCategoryCreateRequestDTO } from '../model/course-category-dto/course-category-create-request';
import { CourseCategoryResponseDTO } from '../model/course-category-dto/course-category-reponse';
import { CourseCategoryUpdateRequestDTO } from '../model/course-category-dto/course-category-update-request';
import { DeleteCourseCategoryRequestDTO } from '../model/course-category-dto/delete-course-category-request';
import { ResponseModel } from '../model/response-model';
import { UpdateIsActiveRequestDTO } from '../model/update-isactive-request';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CourseCategoryService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getCourseCategories(): Observable<
    ResponseModel<CourseCategoryResponseDTO[]>
  > {
    return this.http.get<ResponseModel<CourseCategoryResponseDTO[]>>(
      `${Constants.BASE_URL}/course/category`
    );
  }

  insertCourseCategory(
    data: CourseCategoryCreateRequestDTO
  ): Observable<ResponseModel<string>> {
    return this.http.post<ResponseModel<string>>(
      `${Constants.BASE_URL}/course/category`,
      data
    );
  }

  updateCourseCategory(
    data: CourseCategoryUpdateRequestDTO
  ): Observable<ResponseModel<string>> {
    return this.http.put<ResponseModel<string>>(
      `${Constants.BASE_URL}/course/category`,
      data
    );
  }

  deleteCourseCategoryById(id: string): Observable<ResponseModel<string>> {
    return this.http.delete<ResponseModel<string>>(
      `${Constants.BASE_URL}/course/category/id/${id}`
    );
  }

  setIsActiveFalse(
    data: DeleteCourseCategoryRequestDTO
  ): Observable<DeleteCourseCategoryRequestDTO> {
    return this.http.patch<DeleteCourseCategoryRequestDTO>(
      `${Constants.BASE_URL}/course/category/false`,
      data
    );
  }

  updateIsActive(
    data: UpdateIsActiveRequestDTO
  ): Observable<ResponseModel<string>> {
    return this.http.patch<ResponseModel<string>>(
      `${Constants.BASE_URL}/course/category`,
      data
    );
  }
}
