import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatementOfCashflowsComponent } from './statement-of-cashflows.component';

const routes: Routes = [{ path: '', component: StatementOfCashflowsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatementOfCashflowsRoutingModule { }
