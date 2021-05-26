import {Component, NgZone, OnDestroy, OnInit, Output} from '@angular/core';
import {UserAuthService} from "../../services/user-auth.service";
import {BehaviorSubject, Subject, Subscription} from "rxjs";

@Component({
  selector: 'nr-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnDestroy {
  $panelOpenState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  userAuthorized: boolean = false;
  private _userSubscription: Subscription;

  constructor(private userAuthService: UserAuthService) {
    this._userSubscription = this.userAuthService.user.subscribe(userData => {
      this.userAuthorized = !!userData;
      if (!this.userAuthorized) {
        ///////////////////
      }
    })
  }

  ngOnDestroy(): void {
    this._userSubscription.unsubscribe();
  }

  logout() {
    this.userAuthService.signOut()
  }

  setPanelState(state: boolean) {
    setTimeout(() => {
      this.$panelOpenState.next(state)
    }, 0)
  }
}


