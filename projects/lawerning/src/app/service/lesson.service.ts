import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { LessonResponse } from '../model/lesson-response';
import { ResponseModel } from '../model/response-model';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  constructor(private http: HttpClient) {}

  getLessonModule(idModule: string): Promise<ResponseModel<LessonResponse[]>> {
    return this.http
      .get<ResponseModel<LessonResponse[]>>(
        `${Constants.BASE_URL}/module/lesson/${idModule}`
      )
      .toPromise();
  }

  uploadLessonModule(
    idUser: string,
    idModule: string,
    formData: FormData
  ): Observable<any> {
    return this.http.post<any>(
      `${Constants.BASE_URL}/module/lesson?idUser=${idUser}&idModule=${idModule}`,
      formData
    );
  }

  deleteLessonModule(id: string): Promise<ResponseModel<string>> {
    return this.http
      .delete<ResponseModel<string>>(
        `${Constants.BASE_URL}/module/lesson/${id}`
      )
      .toPromise();
  }
}
