// todo: change name of interface by real prop. name
export interface ITransactionDetails {
  date: Date;
  account: string;
  debit?: number;
  credit?: number;
}
