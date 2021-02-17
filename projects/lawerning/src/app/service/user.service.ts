import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { LoginRequest } from '../model/login-request';
import { LoginResponse } from '../model/login-response';
import { PasswordRequest } from '../model/password-request';
import { ResponseModel } from '../model/response-model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  loginUser(data: LoginRequest): Observable<ResponseModel<LoginResponse>> {
    return this.http.post<ResponseModel<LoginResponse>>(
      `${Constants.BASE_URL}/authentication`,
      data
    );
  }

  updatePassword(data: PasswordRequest): Observable<ResponseModel<string>> {
    return this.http.patch<ResponseModel<string>>(
      `${Constants.BASE_URL}/user/update-password`,
      data
    );
  }

  resetPassword(email: string): Observable<ResponseModel<string>> {
    return this.http.patch<ResponseModel<string>>(
      `${Constants.BASE_URL}/user/forget-password?email=${email}`,
      null
    );
  }
}
