import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {UserAuthService} from "./user-auth.service";
import {Observable, Subscription} from "rxjs";
import firebase from "firebase";
import DocumentData = firebase.firestore.DocumentData;
import {ITransaction} from "../interfaces/transaction.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  uid: string = '';
  private _subscription: Subscription;

  constructor(private afs: AngularFirestore, private authService: UserAuthService) {
    this._subscription = this.authService.user.subscribe((user) => {
      this.uid = user?.uid || '';
    });
  }

  getAccounts(): Observable<DocumentData[]>{
    const accountsListRef: AngularFirestoreCollection = this.afs.collection(`users/${this.uid}/accounts`);
    return accountsListRef.valueChanges({idField: 'id'})
  }

  getAllTransactions(): Observable<DocumentData[]> {
    const transactionsListRef: AngularFirestoreCollection = this.afs.collection(`users/${this.uid}/transactions`);
    return transactionsListRef.valueChanges({idField: 'id'})
  }

  createTransaction(newTransaction: ITransaction): Promise<any> {
    const transactionsListRef: AngularFirestoreCollection = this.afs.collection(`users/${this.uid}/transactions`);
    return transactionsListRef.add(newTransaction)
  }

  editTransaction(newTransactionData: ITransaction): Promise<any> {
    const transactionsListRef: AngularFirestoreCollection = this.afs.collection(`users/${this.uid}/transactions`);
    const id = newTransactionData.id;
    delete newTransactionData.id;
    return transactionsListRef.doc(id).update(newTransactionData)
  }

  deleteTransaction(id: string): Promise<any> {
    const transactionsListRef: AngularFirestoreCollection = this.afs.collection(`users/${this.uid}/transactions`);
    return transactionsListRef.doc(id).delete();
  }
}
