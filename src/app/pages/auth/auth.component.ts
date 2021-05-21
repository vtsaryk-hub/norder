import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'nr-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  globalTabIndex: number = 0;
  tabIndex: number = 0;

  constructor(private ngZone: NgZone, private router: Router) {

  }

  ngOnInit(): void {
    this.urlParse();
  }

  private urlParse(){
    const url = this.router.url;
    switch (url) {
      case '/sign-up':
        this.globalTabIndex = 0;
        this.tabIndex = 1;
        break;
      case '/forgot-password':
        this.globalTabIndex = 1;
        break;
      case '/verify-email':
        this.globalTabIndex = 2;
        break;
      case '/sign-in':
      default:
        this.globalTabIndex = 0;
        this.tabIndex = 0;
        break;
    }
  }

}
