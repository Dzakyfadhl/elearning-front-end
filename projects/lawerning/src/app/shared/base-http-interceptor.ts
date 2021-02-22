import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { LoadingService } from '../service/loading.service';
import { ToastService } from '../service/toast.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class BaseHttpInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private loadingService: LoadingService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.emitStatus(true);
    const token = this.authService.getToken();
    const newRequest = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    return next.handle(newRequest).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.loadingService.emitStatus(false);
        }
        return event;
      }),
      catchError((error: any) => {
        this.toastService.emitHttpErrorMessage(error);
        this.loadingService.emitStatus(false);
        return throwError(error);
      })
    );
  }
}
