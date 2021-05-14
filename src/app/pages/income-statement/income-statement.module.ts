import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeStatementRoutingModule } from './income-statement-routing.module';
import { IncomeStatementComponent } from './income-statement.component';


@NgModule({
  declarations: [
    IncomeStatementComponent
  ],
  imports: [
    CommonModule,
    IncomeStatementRoutingModule
  ]
})
export class IncomeStatementModule { }
