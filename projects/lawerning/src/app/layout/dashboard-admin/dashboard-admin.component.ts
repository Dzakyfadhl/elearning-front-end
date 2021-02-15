import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import Constants from '../../constants/constant';
import { LoginResponse } from '../../model/login-response';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
})
export class DashboardAdminComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  loginResponse: LoginResponse;

  ngOnInit(): void {
    this.loginResponse = this.authService.getLoginResponse();
    if (!this.loginResponse) {
      this.router.navigateByUrl('/login-page');
      return;
    }
    this.setupUserPhoto();
    this.setupMenuToggle();
  }

  setupUserPhoto(): void {
    if (!this.loginResponse.photoId) {
      this.loginResponse.photoId = 'assets/images/default.png';
    } else {
      this.loginResponse.photoId = `${Constants.BASE_URL}/file/${this.loginResponse.photoId}`;
    }
  }

  setupMenuToggle() {
    const menuToggle = document.querySelector('button.navbar-toggler');
    menuToggle.addEventListener('click', this.toggleSidebar);
    const menuList = document.querySelectorAll(
      'a.list-group-item.list-group-item-action'
    );
    menuList.forEach((menu) => {
      menu.addEventListener('click', (event) => {
        if (window.innerWidth < 992) {
          this.toggleSidebar(event);
        }
      });
    });
  }

  toggleSidebar(event: Event) {
    event.preventDefault();
    const wrapper = document.querySelector('#wrapper');
    wrapper.classList.toggle('toggled');
  }

  logout() {
    this.authService.signOut();
    this.router.navigateByUrl('/login');
  }
}
