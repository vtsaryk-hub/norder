import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserAuthService} from "../services/user-auth.service";
import {map} from "rxjs/operators";
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class EmailVerifiedGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, public router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.authState.pipe(
      map(user => {
        if(user && user.emailVerified) {
          return true;
        } else if (user && !user.emailVerified){
          this.router.navigate(['/verify-email']);
          return false;
        } else {
          this.router.navigate(['/sign-in']);
          return false;
        }
      })
    );
  }

}
