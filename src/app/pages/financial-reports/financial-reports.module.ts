import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialReportsRoutingModule } from './financial-reports-routing.module';
import { FinancialReportsComponent } from './financial-reports.component';


@NgModule({
  declarations: [
    FinancialReportsComponent
  ],
  imports: [
    CommonModule,
    FinancialReportsRoutingModule
  ]
})
export class FinancialReportsModule { }
