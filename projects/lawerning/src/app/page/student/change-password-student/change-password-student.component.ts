import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordRequest } from '../../../model/password-request';
import { AuthService } from '../../../service/auth.service';
import { ToastService } from '../../../service/toast.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-change-password-student',
  templateUrl: './change-password-student.component.html',
  styleUrls: ['./change-password-student.component.css'],
})
export class ChangePasswordStudentComponent implements OnInit {
  updatePassword = new PasswordRequest();
  confirmPassword: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.confirmPassword !== this.updatePassword.newPassword) {
      window.alert('Password must be same..');
    } else {
      this.updatePassword.id = this.authService.getLoginResponse().userId;
      this.userService
        .updatePassword(this.updatePassword)
        .subscribe((response) => {
          if (response.code === 200 && response.result) {
            this.toastService.emitSuccessMessage('Updated', response.result);
            this.router.navigateByUrl('/student/home');
          }
        });
    }
  }
}
