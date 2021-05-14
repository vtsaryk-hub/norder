import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceSheetRoutingModule } from './balance-sheet-routing.module';
import { BalanceSheetComponent } from './balance-sheet.component';


@NgModule({
  declarations: [
    BalanceSheetComponent
  ],
  imports: [
    CommonModule,
    BalanceSheetRoutingModule
  ]
})
export class BalanceSheetModule { }
