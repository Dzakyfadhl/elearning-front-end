import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../../model/login-request';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  data = new LoginRequest();

  ngOnInit(): void {}

  login() {
    this.userService.loginUser(this.data).subscribe(
      (value) => {
        let result = value.result;
        this.authService.setLoginResponse(result);

        if (result.role.code == 'RL-003') {
          this.router.navigateByUrl('/home-teacher');
        } else if (result.role.code == 'RL-004') {
          this.router.navigateByUrl('/student/home');
        } else if (result.role.code == 'RL-002') {
          this.router.navigateByUrl('/admin');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
