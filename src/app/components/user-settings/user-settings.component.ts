import {Component, OnInit} from '@angular/core';
import {UserAuthService} from "../../services/user-auth.service";
import {IUser} from "../../interfaces/user.interface";
import firebase from "firebase";
import User = firebase.User;

@Component({
  selector: 'nr-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  userData: IUser | User | null = null;

  constructor(private userAuthService: UserAuthService) {
    userAuthService.userData.subscribe(userData => {
      this.userData = userData;
    })
  }

  ngOnInit(): void {
  }

  login() {
    this.userAuthService.googleAuth()
  }

  logout() {
    this.userAuthService.signOut()
  }

}
