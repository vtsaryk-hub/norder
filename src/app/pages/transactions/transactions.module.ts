import {NgModule} from '@angular/core';

import {TransactionsRoutingModule} from './transactions-routing.module';
import {TransactionsComponent} from './transactions.component';
import {SharedModule} from "../../shared/shared.module";
import {TransactionComponent} from "../../components/transaction/transaction.component";
import {SearchComponent} from "../../components/search/search.component";
import {ChipsComponent} from "../../components/chips/chips.component";
import {NgxPaginationModule } from 'ngx-pagination';
import {FilterPipe} from "../../pipes/filter.pipe";


@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionComponent,
    SearchComponent,
    ChipsComponent,
    FilterPipe
  ],
  imports: [
    SharedModule,
    TransactionsRoutingModule,
    NgxPaginationModule
  ]
})
export class TransactionsModule {
}
