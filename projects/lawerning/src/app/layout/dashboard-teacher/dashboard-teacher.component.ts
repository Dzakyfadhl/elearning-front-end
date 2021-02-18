import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-dashboard-teacher',
  templateUrl: './dashboard-teacher.component.html',
  styleUrls: ['./dashboard-teacher.component.css'],
})
export class DashboardTeacherComponent implements OnInit {
  photo: any;
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    if (!this.authService.getLoginResponse().photoId) {
      this.photo = 'assets/images/default.png';
    } else {
      this.photo = `http://192.168.15.224:8080/file/${
        this.authService.getLoginResponse().photoId
      }`;
    }
  }

  signOut() {
    this.authService.signOut();
    this.route.navigateByUrl('login');
  }
}
