import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
})
export class DashboardAdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
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
}
