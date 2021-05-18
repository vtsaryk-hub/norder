import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material/sort';

import {ITransaction} from '../../interfaces/transaction.interface';
import {compare} from '../../utils/utils';


@Component({
  selector: 'nr-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  //mocked data
  transactionsList: ITransaction[] = [
    {
      date: new Date(2021, 0, 7),
      account: 'Professional Services',
      otherParty: 'John Smith',
      type: 'sent',
      direction: 'payment',
      amount: 400,
      details: [
        {date: new Date(2021, 0, 7), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 7), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 7), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 6),
      account: 'Consulting Fees',
      otherParty: 'Johnson & Johnson',
      type: 'sent',
      direction: 'invoice',
      amount: 380,
      details: [
        {date: new Date(2021, 0, 6), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 6), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 6), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 5),
      account: 'Accounts Receivable',
      otherParty: 'B.C Heart Systems',
      type: 'received',
      direction: 'invoice',
      amount: 384.5,
      details: [
        {date: new Date(2021, 0, 5), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 5), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 5), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 7),
      account: 'Professional Services',
      otherParty: 'John Smith',
      type: 'sent',
      direction: 'payment',
      amount: 400,
      details: [
        {date: new Date(2021, 0, 7), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 7), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 7), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 6),
      account: 'Consulting Fees',
      otherParty: 'Johnson & Johnson',
      type: 'sent',
      direction: 'invoice',
      amount: 380,
      details: [
        {date: new Date(2021, 0, 6), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 6), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 6), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 5),
      account: 'Accounts Receivable',
      otherParty: 'B.C Heart Systems',
      type: 'received',
      direction: 'invoice',
      amount: 384.5,
      details: [
        {date: new Date(2021, 0, 5), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 5), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 5), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 7),
      account: 'Professional Services',
      otherParty: 'John Smith',
      type: 'sent',
      direction: 'payment',
      amount: 400,
      details: [
        {date: new Date(2021, 0, 7), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 7), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 7), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 6),
      account: 'Consulting Fees',
      otherParty: 'Johnson & Johnson',
      type: 'sent',
      direction: 'invoice',
      amount: 380,
      details: [
        {date: new Date(2021, 0, 6), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 6), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 6), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 5),
      account: 'Accounts Receivable',
      otherParty: 'B.C Heart Systems',
      type: 'received',
      direction: 'invoice',
      amount: 384.5,
      details: [
        {date: new Date(2021, 0, 5), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 5), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 5), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 7),
      account: 'Professional Services',
      otherParty: 'John Smith',
      type: 'sent',
      direction: 'payment',
      amount: 400,
      details: [
        {date: new Date(2021, 0, 7), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 7), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 7), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 6),
      account: 'Consulting Fees',
      otherParty: 'Johnson & Johnson',
      type: 'sent',
      direction: 'invoice',
      amount: 380,
      details: [
        {date: new Date(2021, 0, 6), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 6), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 6), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 5),
      account: 'Accounts Receivable',
      otherParty: 'B.C Heart Systems',
      type: 'received',
      direction: 'invoice',
      amount: 384.5,
      details: [
        {date: new Date(2021, 0, 5), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 5), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 5), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 7),
      account: 'Professional Services',
      otherParty: 'John Smith',
      type: 'sent',
      direction: 'payment',
      amount: 400,
      details: [
        {date: new Date(2021, 0, 7), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 7), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 7), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 6),
      account: 'Consulting Fees',
      otherParty: 'Johnson & Johnson',
      type: 'sent',
      direction: 'invoice',
      amount: 380,
      details: [
        {date: new Date(2021, 0, 6), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 6), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 6), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 5),
      account: 'Accounts Receivable',
      otherParty: 'B.C Heart Systems',
      type: 'received',
      direction: 'invoice',
      amount: 384.5,
      details: [
        {date: new Date(2021, 0, 5), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 5), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 5), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 7),
      account: 'Professional Services',
      otherParty: 'John Smith',
      type: 'sent',
      direction: 'payment',
      amount: 400,
      details: [
        {date: new Date(2021, 0, 7), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 7), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 7), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 6),
      account: 'Consulting Fees',
      otherParty: 'Johnson & Johnson',
      type: 'sent',
      direction: 'invoice',
      amount: 380,
      details: [
        {date: new Date(2021, 0, 6), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 6), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 6), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 5),
      account: 'Accounts Receivable',
      otherParty: 'B.C Heart Systems',
      type: 'received',
      direction: 'invoice',
      amount: 384.5,
      details: [
        {date: new Date(2021, 0, 5), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 5), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 5), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 7),
      account: 'Professional Services',
      otherParty: 'John Smith',
      type: 'sent',
      direction: 'payment',
      amount: 400,
      details: [
        {date: new Date(2021, 0, 7), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 7), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 7), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 6),
      account: 'Consulting Fees',
      otherParty: 'Johnson & Johnson',
      type: 'sent',
      direction: 'invoice',
      amount: 380,
      details: [
        {date: new Date(2021, 0, 6), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 6), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 6), account: 'GST Payable', debit: 64.3},
      ]
    },
    {
      date: new Date(2021, 0, 5),
      account: 'Accounts Receivable',
      otherParty: 'B.C Heart Systems',
      type: 'received',
      direction: 'invoice',
      amount: 384.5,
      details: [
        {date: new Date(2021, 0, 5), account: 'Cash', debit: 400},
        {date: new Date(2021, 0, 5), account: 'Consulting Fees', credit: 345.7},
        {date: new Date(2021, 0, 5), account: 'GST Payable', debit: 64.3},
      ]
    }
  ];
  sortedData: ITransaction[];
  page: number = 1;
  itemsLength: number;
  filterValue: string = '';

  constructor(private cdr: ChangeDetectorRef) {
    this.sortedData = this.transactionsList.slice();
    this.itemsLength = this.sortedData.length;
  }

  ngOnInit(): void {
  }

  sortData(sort: Sort) {
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
}
