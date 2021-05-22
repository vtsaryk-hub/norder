import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserAuthService} from "../../services/user-auth.service";
import {IUser} from "../../interfaces/user.interface";
import firebase from "firebase";
import User = firebase.User;
import {Subscription} from "rxjs";

@Component({
  selector: 'nr-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnDestroy {
  userData: User | null = null;
  private _userSubscription: Subscription;

  constructor(private userAuthService: UserAuthService) {
    this._userSubscription = userAuthService.user.subscribe(userData => {
      this.userData = userData;
    })
  }

  login() {
    this.userAuthService.googleAuth()
  }

  logout() {
    this.userAuthService.signOut()
  }

  ngOnDestroy(): void {
    this._userSubscription.unsubscribe();
  }

}
