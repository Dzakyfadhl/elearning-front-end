import { Injectable } from '@angular/core';
import { LoginResponse } from '../model/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  setLoginResponse(data: LoginResponse) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  getLoginResponse(): LoginResponse {
    return JSON.parse(localStorage.getItem('data'));
  }

  signOut() {
    localStorage.clear();
  }
}
