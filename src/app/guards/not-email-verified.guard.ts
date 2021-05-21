import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {UserAuthService} from "../services/user-auth.service";

@Injectable({
  providedIn: 'root'
})
export class NotEmailVerifiedGuard implements CanActivate {
  constructor(private userAuthService: UserAuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return !this.userAuthService.isEmailVerified;
  }
}
