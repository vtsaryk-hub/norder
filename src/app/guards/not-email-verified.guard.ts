import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {UserAuthService} from "../services/user-auth.service";
import {AngularFireAuth} from "@angular/fire/auth";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NotEmailVerifiedGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, public router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.authState.pipe(
      map(user => {
        if(user && !user.emailVerified) {
          return true;
        } else if (user && user.emailVerified){
          this.router.navigate(['/transactions']);
          return false;
        } else {
          this.router.navigate(['/sign-in']);
          return false;
        }
      })
    );
  }
}
