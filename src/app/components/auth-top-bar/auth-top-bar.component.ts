import {Component, Input} from '@angular/core';
import {AbstractAuthorizationComponent} from "../abstract-authorization/abstract-authorization.component";
import {UserAuthService} from "../../services/user-auth.service";

@Component({
  selector: 'nr-auth-top-bar',
  templateUrl: './auth-top-bar.component.html',
  styleUrls: ['./auth-top-bar.component.scss']
})
export class AuthTopBarComponent extends AbstractAuthorizationComponent {
  @Input() desctiption: string = 'Join us today!';
  @Input() header: string = 'Join us today!';

  constructor(userAuthService: UserAuthService) {
    super(userAuthService);
  }

}
