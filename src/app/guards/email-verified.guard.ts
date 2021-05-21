import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserAuthService} from "../services/user-auth.service";

@Injectable({
  providedIn: 'root'
})
export class EmailVerifiedGuard implements CanActivate {
  constructor(private userAuthService: UserAuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userAuthService.isEmailVerified;
  }

}
