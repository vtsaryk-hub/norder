import {NgModule} from '@angular/core';

import {TransactionsRoutingModule} from './transactions-routing.module';
import {TransactionsComponent} from './transactions.component';
import {SharedModule} from "../../shared/shared.module";
import {TransactionComponent} from "../../components/transaction/transaction.component";
import {SearchComponent} from "../../components/search/search.component";
import {ChipsComponent} from "../../components/chips/chips.component";
import {NgxPaginationModule } from 'ngx-pagination';
import {FilterPipe} from "../../pipes/filter.pipe";
import {WriteTransactionComponent} from "../../components/write-transaction/write-transaction.component";


@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionComponent,
    SearchComponent,
    ChipsComponent,
    FilterPipe,
    WriteTransactionComponent
  ],
  imports: [
    SharedModule,
    TransactionsRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class TransactionsModule {
}
