import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { ResponseModel } from '../model/response-model';
import { DeleteSubjectRequestDTO } from '../model/subject-category-dto/delete-subject-request';
import { SubjectCategoryCreateRequestDTO } from '../model/subject-category-dto/subject-category-create-request';
import { SubjectCategoryResponseDTO } from '../model/subject-category-dto/subject-category-response';
import { SubjectCategoryUpdateRequestDTO } from '../model/subject-category-dto/subject-category-update-request';
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
      `${Constants.BASE_URL}/subjectcategory`,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }

  getSubjectCategoryById(
    id: string
  ): Observable<ResponseModel<SubjectCategoryResponseDTO[]>> {
    return this.http.get<ResponseModel<SubjectCategoryResponseDTO[]>>(
      `${Constants.BASE_URL}/subjectcategory/id/${id}`,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }

  insertSubjectCategory(
    data: SubjectCategoryCreateRequestDTO
  ): Observable<ResponseModel<SubjectCategoryCreateRequestDTO[]>> {
    return this.http.post<ResponseModel<SubjectCategoryCreateRequestDTO[]>>(
      `${Constants.BASE_URL}/subjectcategory`,
      data,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }

  updateSubjectCategory(
    data: SubjectCategoryUpdateRequestDTO
  ): Observable<SubjectCategoryUpdateRequestDTO> {
    return this.http.put<SubjectCategoryUpdateRequestDTO>(
      `${Constants.BASE_URL}/subjectcategory`,
      data,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }

  deleteSubjectCategory(
    data: DeleteSubjectRequestDTO
  ): Observable<DeleteSubjectRequestDTO> {
    return this.http.patch<DeleteSubjectRequestDTO>(
      `${Constants.BASE_URL}/subjectcategory`,
      data,
      {
        headers: {
          Authorization: `Bearer ${this.authService.getLoginResponse().token}`,
        },
      }
    );
  }
}
