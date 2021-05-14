import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TransactionsRoutingModule} from './transactions-routing.module';
import {TransactionsComponent} from './transactions.component';
import {SharedModule} from "../../shared/shared.module";
import {TransactionComponent} from "../../components/transaction/transaction.component";
import {SearchComponent} from "../../components/search/search.component";


@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionComponent,
    SearchComponent,
  ],
  imports: [
    SharedModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule {
}
