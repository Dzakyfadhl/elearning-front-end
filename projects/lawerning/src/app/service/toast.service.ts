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

  emitHttpErrorMessage(error: any, message: string | null = null) {
    let msg: string = '';
    if (error.error) {
      msg = error.error.result;
    } else {
      msg = error;
    }
    this.messageObservable.next({
      severity: 'error',
      summary: 'Failed',
      detail: `${message ?? 'Failed request'}. ${msg}`,
    });
    console.error(error);
  }

  emitErrorMessage(message: string) {
    this.messageObservable.next({
      severity: 'error',
      summary: 'Failed',
      detail: message,
    });
  }
}
