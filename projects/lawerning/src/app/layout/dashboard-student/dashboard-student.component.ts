import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrls: ['./dashboard-student.component.css'],
})
export class DashboardStudentComponent implements OnInit {
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {}

  signOut() {
    this.authService.signOut();
    this.route.navigateByUrl('login-page');
  }
}
