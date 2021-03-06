import {Component, Input, OnInit} from '@angular/core';
import {ITransactionDetails} from "../../interfaces/transaction-details.interface";
import {Sort} from "@angular/material/sort";
import {ITransaction} from "../../interfaces/transaction.interface";
import {compare} from "../../utils/utils";

@Component({
  selector: 'nr-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  // todo add an interface for transactionData
  @Input() transactionData: any;
  sortedData: ITransactionDetails[];

  constructor() {
    this.sortedData = []
  }

  ngOnInit(): void {
    this.sortedData = this.transactionData?.details?.slice()
  }

  sortData(sort: Sort) {
    const data = this.transactionData?.details?.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: ITransactionDetails, b: ITransactionDetails) => {
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
