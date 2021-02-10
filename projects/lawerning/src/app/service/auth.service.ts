import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponse } from '../model/login-response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private subject = new BehaviorSubject<boolean>(false);
  isLoggedIn: Observable<boolean>;
  user: Observable<any> = this.subject.asObservable();

  constructor() {
    this.isLoggedIn = this.user.pipe(map((active) => !!active));
  }
  setLoginResponse(data: LoginResponse) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  getLoginResponse(): LoginResponse {
    this.subject.next(true);
    return JSON.parse(localStorage.getItem('data'));
  }

  signOut() {
    localStorage.clear();
    this.subject.next(false);
  }

  getToken(): string | null {
    if (this.getLoginResponse() && this.getLoginResponse().token) {
      return this.getLoginResponse().token;
    }
    return null;
  }

  getUserId(): string {
    return this.getLoginResponse().userId;
  }
}
