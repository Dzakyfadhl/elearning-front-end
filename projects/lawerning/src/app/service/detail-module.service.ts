import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { DetailModuleResponse } from '../model/detail-module-response';
import { ResponseModel } from '../model/response-model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DetailModuleService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  getDtlModuleTeacher(
    id: string
  ): Observable<ResponseModel<DetailModuleResponse>> {
    return this.http.get<ResponseModel<DetailModuleResponse>>(
      `${Constants.BASE_URL}/module/${id}`,
      {
        headers: {
          Authorization: `Bearer : ${
            this.authService.getLoginResponse().token
          }`,
        },
      }
    );
  }
  getDtlModule(id: string): Observable<ResponseModel<DetailModuleResponse>> {
    return this.http.get<ResponseModel<DetailModuleResponse>>(
      `${Constants.BASE_URL}/module/${id}`,
      {
        headers: {
          Authorization: `Bearer : ${
            this.authService.getLoginResponse().token
          }`,
        },
      }
    );
  }
}
