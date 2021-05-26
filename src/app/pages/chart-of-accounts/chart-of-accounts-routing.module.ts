import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartOfAccountsComponent } from './chart-of-accounts.component';

const routes: Routes = [{ path: '', component: ChartOfAccountsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartOfAccountsRoutingModule { }
