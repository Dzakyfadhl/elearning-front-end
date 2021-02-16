import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';
import { LoginRequest } from '../model/login-request';
import { LoginResponse } from '../model/login-response';
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

  updatePassword(
    userId: string,
    newPassword: string
  ): Observable<ResponseModel<string>> {
    return this.http.patch<ResponseModel<string>>(
      `${Constants.BASE_URL}/user?userId=${userId}&newPassword=${newPassword}`,
      null
    );
  }

  resetPassword(email: string): Observable<ResponseModel<string>> {
    return this.http.patch<ResponseModel<string>>(
      `${Constants.BASE_URL}/reset-password?email=${email}`,
      null
    );
  }
}
