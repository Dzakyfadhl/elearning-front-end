import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { ResponseModel } from '../model/response-model';
import { DeleteSubjectRequestDTO } from '../model/subject-category-dto/delete-subject-request';
import { SubjectCategoryCreateRequestDTO } from '../model/subject-category-dto/subject-category-create-request';
import { SubjectCategoryResponseDTO } from '../model/subject-category-dto/subject-category-response';
import { SubjectCategoryUpdateRequestDTO } from '../model/subject-category-dto/subject-category-update-request';
import { UpdateIsActiveRequestDTO } from '../model/update-isactive-request';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SubjectCategoryService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getSubjectCategory(): Observable<
    ResponseModel<SubjectCategoryResponseDTO[]>
  > {
    return this.http.get<ResponseModel<SubjectCategoryResponseDTO[]>>(
      `${Constants.BASE_URL}/subjectcategory`
    );
  }

  getSubjectCategoryById(
    id: string
  ): Observable<ResponseModel<SubjectCategoryResponseDTO[]>> {
    return this.http.get<ResponseModel<SubjectCategoryResponseDTO[]>>(
      `${Constants.BASE_URL}/subjectcategory/id/${id}`
    );
  }

  insertSubjectCategory(
    data: SubjectCategoryCreateRequestDTO
  ): Observable<ResponseModel<string>> {
    return this.http.post<ResponseModel<string>>(
      `${Constants.BASE_URL}/subjectcategory`,
      data
    );
  }

  updateSubjectCategory(
    data: SubjectCategoryUpdateRequestDTO
  ): Observable<ResponseModel<string>> {
    return this.http.put<ResponseModel<string>>(
      `${Constants.BASE_URL}/subjectcategory`,
      data
    );
  }

  deleteSubjectCategory(id: string): Observable<ResponseModel<string>> {
    return this.http.delete<ResponseModel<string>>(
      `${Constants.BASE_URL}/subjectcategory/${id}`
    );
  }

  updateIsActive(
    data: UpdateIsActiveRequestDTO
  ): Observable<ResponseModel<string>> {
    return this.http.patch<ResponseModel<string>>(
      `${Constants.BASE_URL}/subjectcategory`,
      data
    );
  }
}
