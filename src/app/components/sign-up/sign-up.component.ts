import {Component, OnInit} from '@angular/core';
import {UserAuthService} from "../../services/user-auth.service";
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";

@Component({
  selector: 'nr-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  newUserForm = this.fb.group({

    displayName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    passwordGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    }, {validators: [this.isPasswordEquals], updateOn: "blur"} as AbstractControlOptions)
  })

  constructor(private fb: FormBuilder, private userAuthService: UserAuthService) {
  }

  private isPasswordEquals(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : {notEquals: true}
  }

  ngOnInit(): void {
    const a = 10;

  }

  signUp() {

  }

  signUpWithGoogle() {
    this.userAuthService.googleAuth();
  }

  signUpWithFacebook() {
    // this.userAuthService.facebookAuth()
  }
}
