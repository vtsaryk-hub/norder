import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from '@angular/material/sort';
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {MatTabsModule} from "@angular/material/tabs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ValidationInputComponent} from "../components/validataion-input/validation-input.component";
import {CheckboxComponent} from "../components/checkbox/checkbox.component";
import {SelectComponent} from '../components/select/select.component';


@NgModule({
  declarations: [ValidationInputComponent, CheckboxComponent, SelectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatMenuModule,
    MatExpansionModule,
    MatIconModule,
    MatSortModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatMenuModule,
    MatExpansionModule,
    MatIconModule,
    MatSortModule,
    MatTabsModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    ValidationInputComponent,
    CheckboxComponent,
    SelectComponent
  ]
})
export class SharedModule {
}
