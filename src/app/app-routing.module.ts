import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {VerifyEmailComponent} from "./components/verify-email/verify-email.component";
import {AuthGuard} from "./guards/auth.guard";
import {AuthComponent} from "./pages/auth/auth.component";

const routes: Routes = [{
  path: 'transactions',
  loadChildren: () => import('./pages/transactions/transactions.module').then(m => m.TransactionsModule),
  canActivate: [AuthGuard]
}, {
  path: 'chart-of-accounts',
  loadChildren: () => import('./pages/chart-of-accounts/chart-of-accounts.module').then(m => m.ChartOfAccountsModule),
  canActivate: [AuthGuard]
}, {
  path: 'financial-reports',
  loadChildren: () => import('./pages/financial-reports/financial-reports.module').then(m => m.FinancialReportsModule),
  canActivate: [AuthGuard]
},
  {
    path: 'statement-of-cashflows',
    loadChildren: () => import('./pages/statement-of-cashflows/statement-of-cashflows.module').then(m => m.StatementOfCashflowsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'income-statement',
    loadChildren: () => import('./pages/income-statement/income-statement.module').then(m => m.IncomeStatementModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'balance-sheet',
    loadChildren: () => import('./pages/balance-sheet/balance-sheet.module').then(m => m.BalanceSheetModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-in', component: AuthComponent,
  },
  {
    path: 'sign-up', component: AuthComponent
  },
  {
    path: 'forgot-password', component: AuthComponent,
  },
  {
    path: 'change-password', component: AuthComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'verify-email', component: AuthComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: '/sign-in', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
