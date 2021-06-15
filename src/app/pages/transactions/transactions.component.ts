import {ChangeDetectorRef, Component, ElementRef, HostBinding, OnDestroy} from '@angular/core';
import {Sort} from '@angular/material/sort';

import {ITransaction} from '../../interfaces/transaction.interface';
import {compare} from '../../utils/utils';
import {DataService} from "../../services/data.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'nr-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnDestroy {
  private getAllTransactionsSubscription: Subscription;
  private getAccountsSubscription: Subscription;

  @HostBinding('class.overflow-hidden') get overflowHidden() {
    return this.showWriteTransaction;
  }

  editableTransaction: ITransaction | null = null;
  transactionsList: ITransaction[] | null = null;
  sortedData: ITransaction[];
  page: number = 1;
  itemsLength: number;
  filterValue: string = '';
  showWriteTransaction: boolean = false;
  accounts: any[] = [];


  constructor(private cdr: ChangeDetectorRef, private el: ElementRef, public dataService: DataService) {
    this.sortedData = this.transactionsList?.slice() || [];
    this.itemsLength = this.sortedData?.length || 0;
    this.getAllTransactionsSubscription = this.dataService.getAllTransactions().subscribe((data) => {
      if (data) {
        this.transactionsList = data as ITransaction[];
        this.sortedData = this.transactionsList.slice();
      }
    })
    this.getAccountsSubscription = this.dataService.getAccounts().subscribe((accounts) => {
      if (accounts) {
        this.accounts = accounts.map((account) => {
          return {
            value: account?.id,
            text: account?.name
            // text: account?.name + " " + account?.balance
          }
        });
      }
    })
  }

  sortData(sort: Sort) {
    if (!this.transactionsList) {
      this.sortedData = [];
      return;
    }
    const data = this.transactionsList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: ITransaction, b: ITransaction) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date':
          return compare(+a.date, +b.date, isAsc);
        case 'account':
          return compare(a.account, b.account, isAsc);
        case 'otherParty':
          return compare(a.otherParty, b.otherParty, isAsc);
        case 'type':
          return compare(a.type, b.type, isAsc);
        case 'direction':
          return compare(a.direction, b.direction, isAsc);
        case 'amount':
          return compare(a.amount, b.amount, isAsc);
        default:
          return 0;
      }
    });
  }

  applyFilter(event: InputEvent) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.cdr.markForCheck();
  }

  filterCallback = (filteredData: any[]) => {
    this.itemsLength = filteredData.length;
  }

  addTransaction() {
    this.showWriteTransaction = true;
    this.el.nativeElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  onAddTransactionSubmit(data: ITransaction) {
    this.showWriteTransaction = false;
    //todo add reaction on "add new transaction" and catch an error
    this.dataService.createTransaction(data)
  }

  onEditTransactionSubmit(data: ITransaction) {
    this.showWriteTransaction = false;
    this.editableTransaction = null;
    //todo add reaction on "edit transaction" and catch an error
    this.dataService.editTransaction(data)
  }

  deleteTransaction(id: any) {
    //todo add reaction on deleted and catch an error
    this.dataService.deleteTransaction(id)
  }

  editTransaction(id: string) {
    this.showWriteTransaction = true;
    this.editableTransaction = this.transactionsList?.find((transaction) => transaction.id === id) || null;
  }

  ngOnDestroy(): void {
    this.getAccountsSubscription.unsubscribe();
    this.getAllTransactionsSubscription.unsubscribe();
  }
}
