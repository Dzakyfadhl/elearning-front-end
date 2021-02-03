import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailModuleResponse } from '../model/detail-module-response';
import { ResponseModel } from '../model/response-model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DetailModuleService {
  baseUrl = 'http://192.168.15.224:8080';
  constructor(private authService: AuthService, private http: HttpClient) {}

  getDtlModuleTeacher(
    id: string
  ): Observable<ResponseModel<DetailModuleResponse>> {
    return this.http.get<ResponseModel<DetailModuleResponse>>(
      `${this.baseUrl}/module/${id}`,
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
