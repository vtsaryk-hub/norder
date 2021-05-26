import { NgModule } from '@angular/core';

import { ChartOfAccountsRoutingModule } from './chart-of-accounts-routing.module';
import { ChartOfAccountsComponent } from './chart-of-accounts.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ChartOfAccountsComponent
  ],
  imports: [
    SharedModule,
    ChartOfAccountsRoutingModule
  ]
})
export class ChartOfAccountsModule { }
