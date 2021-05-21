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
import { AuthComponent } from './pages/auth/auth.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [UserAuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
