import { Component, OnDestroy, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ToastService } from './service/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private toastService: ToastService,
    private messageService: MessageService
  ) {}

  title = 'lawerning';
  private subscription: Subscription;

  ngOnInit(): void {
    this.subscribeMessageObservable();  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscribeMessageObservable() {
    this.subscription = this.toastService.messageObservable.subscribe(
      (msg: Message) => {
        this.messageService.add(msg);
      }
    );
  }
}
