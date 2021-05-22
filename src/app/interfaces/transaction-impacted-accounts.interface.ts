export interface ITransactionImpactedAccounts {
  date: Date;
  account: string;
  debit?: number;
  credit?: number;
}
