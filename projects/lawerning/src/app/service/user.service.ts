import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../model/login-request';
import { LoginResponse } from '../model/login-response';
import { ResponseModel } from '../model/response-model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = `https://902c715090b3.ngrok.io/authentication`;

  constructor(private http: HttpClient) {}

  loginUser(data: LoginRequest): Observable<ResponseModel<LoginResponse>> {
    return this.http.post<ResponseModel<LoginResponse>>(this.baseUrl, data);
  }
}
