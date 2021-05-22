import {Component} from '@angular/core';
import {UserAuthService} from "../../services/user-auth.service";
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder, FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {Router} from "@angular/router";
import {AbstractAuthorizationComponent} from "../abstract-authorization/abstract-authorization.component";

@Component({
  selector: 'nr-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends AbstractAuthorizationComponent {
  newUserForm = this.fb.group({
    displayName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    passwordGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    }, {validators: [this.isPasswordEquals], updateOn: "blur"} as AbstractControlOptions)
  })
  showPass: boolean = false;
  showPassConf: boolean = false;

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
