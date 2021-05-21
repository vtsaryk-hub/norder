import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserAuthService} from "../../services/user-auth.service";
import {Router} from "@angular/router";
import {AuthBaseComponent} from "../auth-base/auth-base.component";

@Component({
  selector: 'nr-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent extends AuthBaseComponent {

  constructor(public userAuthService: UserAuthService, private router: Router) {
    super();
/*    userAuthService.user.subscribe(user => {
      if (user?.emailVerified && router.url === '/verify-email') {
        router.navigate(['transactions'])
      }
    })*/
  }
}
