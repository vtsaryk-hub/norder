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
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolores expedita facere magni molestiae quas rerum vitae! At aut autem commodi, cupiditate eaque, est ipsam iste officia, optio quod recusandae soluta velit veritatis. Cumque dicta distinctio dolorem dolores doloribus excepturi fuga fugiat illum incidunt laboriosam minima modi nulla, provident soluta veniam veritatis, vitae. Accusantium adipisci autem deleniti dolores ex fuga harum, laboriosam praesentium quasi repellendus, velit veritatis, vitae. At cupiditate delectus ducimus earum harum sit voluptatem, voluptatum? Deleniti fugit, magnam nisi possimus quasi quod voluptates. Ab architecto consectetur, dolor exercitationem, explicabo hic impedit ipsum iste iusto magni minima minus nesciunt pariatur praesentium quisquam. Aliquid et excepturi illum nobis odit rem tenetur vero? A quos ullam veritatis! Atque, eos esse ex impedit in iste laborum nam nisi nobis perferendis quas, quis tempore temporibus. Architecto aspernatur dolores excepturi facilis itaque laboriosam, natus officiis, quisquam sequi temporibus ullam, voluptatum! Ab accusamus accusantium adipisci amet architecto, aut corporis cupiditate debitis dolor esse expedita facilis fugit id impedit in incidunt ipsum molestiae nemo nihil non nulla numquam obcaecati, officiis pariatur perferendis quia rem repudiandae sequi suscipit tempora tempore ullam unde veritatis. A beatae eligendi eveniet hic libero rerum sed tempore veritatis. Alias, consequuntur et incidunt iure labore non quae quaerat sint. Ad delectus excepturi optio voluptates voluptatum. Accusantium assumenda beatae distinctio hic illum ipsam, maxime odit officiis rem vitae! Amet consequuntur, in! Architecto aspernatur culpa deleniti doloribus est, eum fuga hic ipsa nihil nulla officiis possimus quas quisquam rem repellendus, rerum vitae voluptate voluptatem! A beatae, cupiditate delectus eligendi, enim id labore laudantium mollitia natus nobis non nostrum, odio placeat possimus quisquam reiciendis repellendus similique soluta tempore totam unde vel vero. Aperiam blanditiis cumque delectus et exercitationem ipsam magni, nesciunt non optio, possimus, quaerat quam quasi ratione reiciendis sint sit ullam voluptatem voluptatibus. Nobis, odio.',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
      details: 'Here should be some "details text"',
      impactedAccounts: [
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
