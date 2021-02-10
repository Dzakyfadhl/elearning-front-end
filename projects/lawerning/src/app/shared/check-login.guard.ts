import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CheckLoginGuard implements CanActivate {
  constructor(private auth: AuthService, private route: Router) {}
  canActivate(): Observable<boolean | UrlTree> {
    return this.auth.isLoggedIn.pipe(
      map((loggedIn) => (loggedIn ? true : this.route.parseUrl('/**')))
    );
  }
}
