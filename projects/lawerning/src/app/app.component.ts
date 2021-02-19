import { state } from '@angular/animations';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { LoadingService } from './service/loading.service';
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
    private messageService: MessageService,
    private loadingService: LoadingService,
    private cdr: ChangeDetectorRef
  ) {}

  title = 'lawerning';
  private toastSubscription: Subscription;
  private subcription: Subscription;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.subscribeMessageObservable();
    this.subscribeStatusObservable();
  }

  ngOnDestroy(): void {
    this.toastSubscription.unsubscribe();
    this.subcription.unsubscribe();
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
  private subscribeMessageObservable() {
    this.toastSubscription = this.toastService.messageObservable.subscribe(
      (msg: Message) => {
        this.messageService.add(msg);
      }
    );
  }
  private subscribeStatusObservable() {
    this.subcription = this.loadingService.statusObservable.subscribe(
      (status) => {
        this.isLoading = status;
      }
    );
  }
}
