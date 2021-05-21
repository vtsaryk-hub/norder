import {Component} from '@angular/core';
import {AuthBaseComponent} from "../auth-base/auth-base.component";

@Component({
  selector: 'nr-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent extends AuthBaseComponent {

  constructor() {
    super()
  }

}
