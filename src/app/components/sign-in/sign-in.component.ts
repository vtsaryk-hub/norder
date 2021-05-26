import {Component} from '@angular/core';
import {AbstractAuthorizationComponent} from "../abstract-authorization/abstract-authorization.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserAuthService} from "../../services/user-auth.service";
import {getValidationMessages} from "../../constants/validation-messages";
import {displayNameRegExp, emailRegExp, passwordRegExp} from "../../utils/regexp";

@Component({
  selector: 'nr-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends AbstractAuthorizationComponent {
  emailValidationMessages = getValidationMessages('email');
  passwordValidationMessages = getValidationMessages('password');
  userForm: FormGroup = this.fb.group({
    email: ['',  [
      Validators.required,
      Validators.pattern(emailRegExp)
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(25),
      Validators.pattern(passwordRegExp)
    ]],
  })
  showPass: boolean = false;

  constructor(private fb: FormBuilder, userAuthService: UserAuthService) {
    super(userAuthService);
  }

  submit(form: FormGroup) {
    // todo add validation messages
    if (form.valid) {
      super.submit(form, 'in');
    }
  }

  togglePass() {
    this.showPass = !this.showPass;
  }
}
