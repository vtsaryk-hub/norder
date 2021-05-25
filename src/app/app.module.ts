import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TopBarComponent} from "./components/top-bar/top-bar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {UserSettingsComponent} from "./components/user-settings/user-settings.component";
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {VerifyEmailComponent} from './components/verify-email/verify-email.component';
import {UserAuthService} from "./services/user-auth.service";
import {AuthGuard} from "./guards/auth.guard";
import {AuthComponent} from './pages/auth/auth.component';
import {AbstractAuthorizationComponent} from './components/abstract-authorization/abstract-authorization.component';
import {AuthTopBarComponent} from './components/auth-top-bar/auth-top-bar.component';
import {EmailVerifiedGuard} from "./guards/email-verified.guard";
import {AuthBaseComponent} from './components/auth-base/auth-base.component';
import {NotAuthGuard} from "./guards/not-auth.guard";
import {NotEmailVerifiedGuard} from "./guards/not-email-verified.guard";
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {ValidationInputComponent} from './components/validataion-input/validation-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    SideBarComponent,
    UserSettingsComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    VerifyEmailComponent,
    AuthComponent,
    AbstractAuthorizationComponent,
    AuthTopBarComponent,
    AuthBaseComponent,
    PageNotFoundComponent,
    ValidationInputComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [UserAuthService, AuthGuard, EmailVerifiedGuard, NotAuthGuard, NotEmailVerifiedGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
