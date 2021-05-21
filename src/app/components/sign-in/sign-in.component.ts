import {Component, OnInit} from '@angular/core';
import {AbstractAuthorizationComponent} from "../abstract-authorization/abstract-authorization.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserAuthService} from "../../services/user-auth.service";

@Component({
  selector: 'nr-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends AbstractAuthorizationComponent {
  userForm: FormGroup = this.fb.group({
    email: ['', {validators: [Validators.required]}],
    password: ['', {validators: [Validators.required, Validators.minLength(8)], updateOn: "blur"}],
  })

  constructor(private fb: FormBuilder, userAuthService: UserAuthService) {
    super(userAuthService);
  }

  submit(form: FormGroup) {
    console.log(form.valid)
    super.submit(form);
  }
}
