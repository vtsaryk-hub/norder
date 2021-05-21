import {Component, OnInit} from '@angular/core';
import {UserAuthService} from "../../services/user-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'nr-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  constructor(private userAuthService: UserAuthService, private router: Router) {
    userAuthService.user.subscribe(user => {
      if (user?.emailVerified) {
        router.navigate(['transactions'])
      }
    })
  }

  ngOnInit(): void {
  }

}
