import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  messageObservable = new Subject<Message>();

  constructor() {}

  emitSuccessMessage(title: string, message: string) {
    this.messageObservable.next({
      severity: 'success',
      summary: title,
      detail: message,
    });
  }

  emitHttpErrorMessage(
    error: HttpErrorResponse,
    message: string | null = null
  ) {
    let msg: string = '';
    if (error.error) {
      msg = error.error.result;
    } else {
      msg = error.message;
    }
    this.messageObservable.next({
      severity: 'error',
      summary: 'Failed',
      detail: `${message ?? 'Failed request'}. ${msg}`,
    });
    console.log(error);
  }
}
