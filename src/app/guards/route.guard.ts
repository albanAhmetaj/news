import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('role')) {
      const role = localStorage.getItem('role');

      // Guard Managers route
      if (state.url === '/adminpanel/managers') {
        if (parseInt(role, 10) === 1) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      }

      // Guard Authors route
      if (state.url === '/adminpanel/authors') {
        if (parseInt(role, 10) === 1 || parseInt(role, 10) === 2) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      }
    }

    return true;
  }
}
