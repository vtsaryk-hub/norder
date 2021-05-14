import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'transactions',
  loadChildren: () => import('./pages/transactions/transactions.module').then(m => m.TransactionsModule)
}, {
  path: 'chart-of-accounts',
  loadChildren: () => import('./pages/chart-of-accounts/chart-of-accounts.module').then(m => m.ChartOfAccountsModule)
}, {
  path: 'financial-reports',
  loadChildren: () => import('./pages/financial-reports/financial-reports.module').then(m => m.FinancialReportsModule)
}, {
  path: '', redirectTo: '/transactions', pathMatch: 'full'
},
  { path: 'statement-of-cashflows', loadChildren: () => import('./pages/statement-of-cashflows/statement-of-cashflows.module').then(m => m.StatementOfCashflowsModule) },
  { path: 'income-statement', loadChildren: () => import('./pages/income-statement/income-statement.module').then(m => m.IncomeStatementModule) },
  { path: 'balance-sheet', loadChildren: () => import('./pages/balance-sheet/balance-sheet.module').then(m => m.BalanceSheetModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
