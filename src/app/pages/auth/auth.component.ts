import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from "@angular/router";
import {UserAuthService} from "../../services/user-auth.service";
import {SubscriptionLike} from "rxjs";

@Component({
  selector: 'nr-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  globalTabIndex: number = 0;
  tabIndex: number = 0;
  private _locationSubscription: SubscriptionLike;


  constructor(private ngZone: NgZone, private router: Router, private location: Location, userAuthService: UserAuthService) {
    this._locationSubscription = location.subscribe((val: any) => {
      this.urlParse(val.url)
    })
  }

  ngOnInit(): void {
    const url = this.router.url;
    this.urlParse(url);
  }

  navigation(url: string) {
    this.location.go(url);
    this.urlParse(url);
  }

  private urlParse(url: string) {
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
      case '/change-password':
        this.globalTabIndex = 3;
        break;
      case '/sign-in':
      default:
        this.globalTabIndex = 0;
        this.tabIndex = 0;
        break;
    }
  }

  ngOnDestroy(): void {
    this._locationSubscription.unsubscribe();
  }

}
