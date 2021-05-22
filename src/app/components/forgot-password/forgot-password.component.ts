import {Component} from '@angular/core';
import {AuthBaseComponent} from "../auth-base/auth-base.component";

@Component({
  selector: 'nr-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent extends AuthBaseComponent {
  constructor() {
    super()
  }
}
