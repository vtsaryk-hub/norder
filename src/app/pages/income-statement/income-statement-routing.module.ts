import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeStatementComponent } from './income-statement.component';

const routes: Routes = [{ path: '', component: IncomeStatementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeStatementRoutingModule { }
