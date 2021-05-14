import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialReportsComponent } from './financial-reports.component';

const routes: Routes = [{ path: '', component: FinancialReportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialReportsRoutingModule { }
