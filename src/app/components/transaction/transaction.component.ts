import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITransactionImpactedAccounts} from "../../interfaces/transaction-impacted-accounts.interface";
import {Sort} from "@angular/material/sort";
import {compare} from "../../utils/utils";

@Component({
  selector: 'nr-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  @Input() accounts: any[] = [];
  @Input() transactionData: any; // ITransaction
  @Output() onDelete = new EventEmitter<string>();
  @Output() onEdit = new EventEmitter<string>();
  sortedData: ITransactionImpactedAccounts[];
  id: string = '';
  private accountName: string = '';

  constructor() {
    this.sortedData = [];
  }

  ngOnInit(): void {
    this.sortedData = this.transactionData?.impactedAccounts?.slice();
    this.id = this.transactionData.id;
    this.accountName = this.accounts.find((account) => {
      return this.transactionData.account === account.id;
    })?.name || '';
  }


  sortData(sort: Sort) {
    const data = this.transactionData?.impactedAccounts?.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: ITransactionImpactedAccounts, b: ITransactionImpactedAccounts) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date':
          return compare(+a.date, +b.date, isAsc);
        case 'account':
          return compare(a.account, b.account, isAsc);
        case 'debit':
          return compare(a.debit || 0, b.debit || 0, isAsc);
        case 'credit':
          return compare(a.credit || 0, b.credit || 0, isAsc);
        default:
          return 0;
      }
    });

  }
}
