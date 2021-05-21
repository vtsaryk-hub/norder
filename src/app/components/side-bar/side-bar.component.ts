import {Component, NgZone, OnInit, Output} from '@angular/core';
import {UserAuthService} from "../../services/user-auth.service";
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'nr-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  $panelOpenState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  userAuthorized: boolean = false;

  constructor(private userAuthService: UserAuthService, private ngZone: NgZone) {
    this.userAuthService.user.subscribe(userData => {
      this.userAuthorized = !!userData;
      if (!this.userAuthorized) {
        ///////////////////
      }
    })
  }

  ngOnInit(): void {
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


