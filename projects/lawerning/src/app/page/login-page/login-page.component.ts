import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
 
  username: string = "";
  password: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    // if(this.username=="teacher" && this.password =="teacher"){
      this.router.navigateByUrl('/home-teacher');
    // }
  }
}
