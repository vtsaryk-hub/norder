import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {UserAuthService} from "../../services/user-auth.service";
import {AuthBaseComponent} from "../auth-base/auth-base.component";

@Component({
  selector: 'nr-abstract-authorization',
  template: ``,
  styleUrls: ['./abstract-authorization.component.scss']
})
export class AbstractAuthorizationComponent extends AuthBaseComponent{

  constructor(private userAuthService: UserAuthService) {
    super();
  }

  googleAuth() {
    this.userAuthService.googleAuth();
  }

  facebookAuth() {
    this.userAuthService.facebookAuth()
  }

  submit(form: FormGroup, flag: string) {
    if (flag === 'in' && form.valid) {
      this.userAuthService.signIn(form.get('email')?.value, form.get('password')?.value)
    } else if (flag === 'up' && form.valid) {
      this.userAuthService.signUp(form.get('email')?.value, form.get('passwordGroup')?.get('password')?.value, form.get('displayName')?.value)
    }
  }

}
