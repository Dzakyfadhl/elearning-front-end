import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Permissions } from './permissions';

@Injectable()
export class CheckLoginGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private route: Router,
    private permissions: Permissions
  ) {}
  canActivate(
    routeActive: ActivatedRouteSnapshot
  ): Observable<boolean> | UrlTree | boolean | UrlTree {
    console.log(routeActive);
    let token: string;
    let role: string;
    if (!this.auth.getLoginResponse()) {
      token = null;
      role = '';
    } else {
      token = this.auth.getLoginResponse().token;
      role = this.auth.getLoginResponse().role.name;
    }

    let permitted: boolean = this.permissions.canActivate(
      token,
      role,
      routeActive.routeConfig.path
    );
    console.log(permitted);

    if (!permitted) {
      if (
        this.auth.getLoginResponse().role.name == 'Student' &&
        this.auth.getLoginResponse().token != null
      ) {
        this.route.navigate(['student/home']);
      } else if (
        this.auth.getLoginResponse().role.name == 'Teacher' &&
        this.auth.getLoginResponse().token != null
      ) {
        this.route.navigate(['teacher/home']);
      } else if (
        this.auth.getLoginResponse().role.name == 'Admin' &&
        this.auth.getLoginResponse().token != null
      ) {
        this.route.navigate(['admin']);
      } else {
        this.route.navigate(['home-page']);
      }
    }
    return permitted;
  }
}
