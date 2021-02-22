import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordRequest } from '../../../model/password-request';
import { AuthService } from '../../../service/auth.service';
import { ToastService } from '../../../service/toast.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  updatePassword = new PasswordRequest();
  confirmPassword: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  submit() {
    this.updatePassword.id = this.authService.getLoginResponse().userId;
    if (this.confirmPassword !== this.updatePassword.newPassword) {
      this.toastService.emitErrorMessage('Confirm password is not match');
      return;
    }
    this.userService
      .updatePassword(this.updatePassword)
      .subscribe((response) => {
        if (response.code === 200 && response.result) {
          this.toastService.emitSuccessMessage('Submitted', response.result);
          this.router.navigateByUrl('/teacher/home');
        }
      });
  }
}
