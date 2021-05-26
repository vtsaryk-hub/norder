import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatementOfCashflowsRoutingModule } from './statement-of-cashflows-routing.module';
import { StatementOfCashflowsComponent } from './statement-of-cashflows.component';


@NgModule({
  declarations: [
    StatementOfCashflowsComponent
  ],
  imports: [
    CommonModule,
    StatementOfCashflowsRoutingModule
  ]
})
export class StatementOfCashflowsModule { }
