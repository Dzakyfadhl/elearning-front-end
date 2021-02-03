import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class BaseHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('authentication')) {
      return next.handle(req);
    }
    
    const token = this.authService.getToken();
    const newRequest = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    return next.handle(newRequest);
  }
}
