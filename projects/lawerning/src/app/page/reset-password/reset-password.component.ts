import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ToastService } from '../../service/toast.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  email: string;

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  resetPassword() {
    console.log(this.email);

    this.userService.resetPassword(this.email).subscribe(
      (response) => {
        if (response.code === 200) {
          this.toastService.emitSuccessMessage(
            'success',
            'please check your email'
          );
          this.router.navigateByUrl('/home-page');
        }
      },
      (error: HttpErrorResponse) => {
        this.toastService.emitHttpErrorMessage(error, 'Failed');
      }
    );
  }
}
