import {Component, ViewChild} from '@angular/core';
import {UserAuthService} from "./services/user-auth.service";

@Component({
  selector: 'nr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenavRef: any;
  title = 'norder';

  constructor(private userAuthService: UserAuthService) {
    userAuthService.user.subscribe((user) => {
      if (user === null) {
        this.sidenavRef?.close()
      }
    })
  }
}
