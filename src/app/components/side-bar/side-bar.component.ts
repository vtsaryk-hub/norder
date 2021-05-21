import {Component, OnInit} from '@angular/core';
import {UserAuthService} from "../../services/user-auth.service";
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'nr-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  $panelOpenState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  // todo fix that mock prop
  userAuthorized: boolean = false;

  constructor(private userAuthService: UserAuthService) {
    this.userAuthService.userData.subscribe(userData => {
      this.userAuthorized = !!userData
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


