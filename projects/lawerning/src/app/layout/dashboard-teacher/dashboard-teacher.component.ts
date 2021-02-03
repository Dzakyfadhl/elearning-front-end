import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-dashboard-teacher',
  templateUrl: './dashboard-teacher.component.html',
  styleUrls: ['./dashboard-teacher.component.css'],
})
export class DashboardTeacherComponent implements OnInit {
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {}

  signOut() {
    this.authService.signOut();
    this.route.navigateByUrl('login-page');
  }
}
