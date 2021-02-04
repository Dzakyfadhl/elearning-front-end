import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
})
export class DashboardAdminComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.getLoginResponse()) {
      this.router.navigateByUrl('/login-page');
    }
    this.setupMenuToggle();
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
    this.router.navigateByUrl('/login-page');
  }
}
