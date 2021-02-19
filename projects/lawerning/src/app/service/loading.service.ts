import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  statusObservable = new Subject<boolean>();

  constructor() {}

  emitStatus(state: boolean) {
    this.statusObservable.next(state);
  }
}
