import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserAuthService} from "../services/user-auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public userAuthService: UserAuthService, public router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
/*    if(!this.userAuthService.isLoggedIn) {
      this.router.navigate(['sign-in'])
    }*/
    return this.userAuthService.isLoggedIn;
  }

}
