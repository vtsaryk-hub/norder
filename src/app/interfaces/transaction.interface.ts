import {ITransactionDetails} from "./transaction-details.interface";

export type transactionType = 'sent' | 'received';
export type transactionDirection = 'invoice' | 'payment';

export interface ITransaction {
  date: Date;
  account: string;
  otherParty: string,
  type: transactionType;
  direction: transactionDirection;
  amount: number;
  details: ITransactionDetails[]
}
