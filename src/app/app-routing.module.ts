import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";
import {AuthComponent} from "./pages/auth/auth.component";
import {EmailVerifiedGuard} from "./guards/email-verified.guard";
import {NotAuthGuard} from "./guards/not-auth.guard";
import {NotEmailVerifiedGuard} from "./guards/not-email-verified.guard";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [{
  path: 'transactions',
  loadChildren: () => import('./pages/transactions/transactions.module').then(m => m.TransactionsModule),
  canActivate: [AuthGuard, EmailVerifiedGuard]
}, {
  path: 'chart-of-accounts',
  loadChildren: () => import('./pages/chart-of-accounts/chart-of-accounts.module').then(m => m.ChartOfAccountsModule),
  canActivate: [AuthGuard, EmailVerifiedGuard]
}, {
  path: 'financial-reports',
  loadChildren: () => import('./pages/financial-reports/financial-reports.module').then(m => m.FinancialReportsModule),
  canActivate: [AuthGuard, EmailVerifiedGuard]
},
  {
    path: 'statement-of-cashflows',
    loadChildren: () => import('./pages/statement-of-cashflows/statement-of-cashflows.module').then(m => m.StatementOfCashflowsModule),
    canActivate: [AuthGuard, EmailVerifiedGuard]
  },
  {
    path: 'income-statement',
    loadChildren: () => import('./pages/income-statement/income-statement.module').then(m => m.IncomeStatementModule),
    canActivate: [AuthGuard, EmailVerifiedGuard]
  },
  {
    path: 'balance-sheet',
    loadChildren: () => import('./pages/balance-sheet/balance-sheet.module').then(m => m.BalanceSheetModule),
    canActivate: [AuthGuard, EmailVerifiedGuard]
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./pages/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
  },
  {
    path: 'sign-in', component: AuthComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'sign-up', component: AuthComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'forgot-password', component: AuthComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'change-password', component: AuthComponent,
    canActivate: [AuthGuard, EmailVerifiedGuard]
  },
  {
    path: 'verify-email', component: AuthComponent,
    canActivate: [AuthGuard, NotEmailVerifiedGuard]
  },
  {
    path: '404', component: PageNotFoundComponent
  },
  {
    path: '', redirectTo: '/transactions', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
