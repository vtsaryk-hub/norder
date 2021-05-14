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
  userAuthorized: boolean = true;

  constructor(private userAuthService: UserAuthService) {
    userAuthService.$user.subscribe(value => this.userAuthorized = !!value)

  }

  ngOnInit(): void {
  }

  logout() {
    this.userAuthService.logout()
  }

  setPanelState(state: boolean) {
    setTimeout(() => {
      this.$panelOpenState.next(state)
    }, 0)
  }
}


