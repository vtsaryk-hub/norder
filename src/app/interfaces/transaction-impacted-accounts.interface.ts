// todo: change name of interface by real prop. name
export interface ITransactionImpactedAccounts {
  date: Date;
  account: string;
  debit?: number;
  credit?: number;
}
