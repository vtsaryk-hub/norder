import {Component} from '@angular/core';
import {UserAuthService} from "../../services/user-auth.service";
import {
  AbstractControl, AbstractControlOptions,
  FormBuilder, FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {Router} from "@angular/router";
import {AbstractAuthorizationComponent} from "../abstract-authorization/abstract-authorization.component";
import {getValidationMessages} from "../../constants/validation-messages";
import {isEquals} from "../../utils/utils";
import {displayNameRegExp, emailRegExp, passwordRegExp} from "../../utils/regexp";



@Component({
  selector: 'nr-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends AbstractAuthorizationComponent {
  newUserForm = this.fb.group({
    displayName: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(25),
      Validators.pattern(displayNameRegExp)
    ]],
    email: ['', [
      Validators.required,
      Validators.pattern(emailRegExp)
    ]],
    passwordGroup: this.fb.group({
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25),
        Validators.pattern(passwordRegExp)
      ]],
      confirmPassword: ['', [
        Validators.required
      ]]
    }, {validators: [isEquals('password', 'confirmPassword')]} as AbstractControlOptions)
  })

  displayNameValidationMessages = getValidationMessages('displayName');
  emailValidationMessages = getValidationMessages('email');
  passwordValidationMessages = getValidationMessages('password');
  confirmPasswordValidationMessages = getValidationMessages('confirmPassword');

  constructor(private fb: FormBuilder, userAuthService: UserAuthService, router: Router) {
    super(userAuthService)
  }

  private isPasswordEquals(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : {notEquals: true}
  }

  submit(form: FormGroup) {
    if (form.valid) {
      super.submit(form, 'up');
    }
  }
}
