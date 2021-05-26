import {Component, ViewChild} from '@angular/core';
import {UserAuthService} from "./services/user-auth.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'nr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenavRef: any;
  title = 'norder';

  constructor(private userAuthService: UserAuthService, private router: Router) {
    userAuthService.user.subscribe((user) => {
      if (user === null) {
        this.sidenavRef?.close()
      }
    });
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/verify-email':
          case '/change-password':
          case '/forgot-password':
          case '/sign-up':
          case '/sign-in':
            this.sidenavRef?.close();
            break;
        }
      }
    })

  }
}
