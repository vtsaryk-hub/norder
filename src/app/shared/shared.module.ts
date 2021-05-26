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
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatMenuModule,
    MatExpansionModule,
    MatIconModule,
    MatSortModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule

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
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
