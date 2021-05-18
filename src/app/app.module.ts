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
import { ChipsComponent } from './components/chips/chips.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        FooterComponent,
        SideBarComponent,
        UserSettingsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
