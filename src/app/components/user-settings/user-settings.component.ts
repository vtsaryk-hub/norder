import {Component, OnInit} from '@angular/core';
import {UserAuthService} from "../../services/user-auth.service";
import {IUser} from "../../interfaces/iuser";

@Component({
  selector: 'nr-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  userData: IUser | null = null;

  constructor(private userAuthService: UserAuthService) {
    userAuthService.$user.subscribe(value => {
      this.userData = value
    })
  }

  ngOnInit(): void {
  }

  login() {
    this.userAuthService.login()
  }

  logout() {
    this.userAuthService.logout()
  }

}
