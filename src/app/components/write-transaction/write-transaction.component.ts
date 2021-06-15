import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {ITransaction, transactionDirection, transactionType} from "../../interfaces/transaction.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {getValidationMessages} from "../../constants/validation-messages";
import {Router} from "@angular/router";
import {slideInOut} from "../../animations/animation";

@Component({
  selector: 'nr-write-transaction',
  templateUrl: './write-transaction.component.html',
  styleUrls: ['./write-transaction.component.scss'],
  animations: [slideInOut]
})
export class WriteTransactionComponent implements OnInit {
  @HostBinding('@slideInOut') get animationState() {
    return true;
  }

  @Input() accounts: any[] = [];
  @Input() transaction?: any;
  @Output() onClose = new EventEmitter();
  @Output() onEditSave = new EventEmitter<ITransaction>();
  @Output() onAddSave = new EventEmitter<ITransaction>();

  public _type: boolean = true;

  get type(): transactionType {
    return this._type ? 'sent' : 'received'
  }

  set type(val: transactionType) {
    this._type = val === 'sent';
  }

  public _direction: boolean = true;

  get direction(): transactionDirection {
    return this._direction ? 'invoice' : 'payment'
  }

  set direction(val: transactionDirection) {
    this._direction = val === 'invoice';
  }

  form: FormGroup = this.fb.group({
    date: ['', [
      Validators.required,
    ]],
    account: ['', [
      Validators.required
    ]],
    otherParty: ['', [
      Validators.required
    ]],
    details: ['', [
      Validators.required
    ]],
    amount: ['', [
      Validators.required
    ]]
  })
  dateValidationMessages = getValidationMessages('date');

  header: string = 'Add transaction'

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.transaction) {
      this.form.controls['date'].setValue(this.transaction.date);
      this.form.controls['account'].setValue(this.transaction.account);
      this.form.controls['otherParty'].setValue(this.transaction.otherParty);
      this.form.controls['details'].setValue(this.transaction.details);
      this.form.controls['amount'].setValue(this.transaction.amount);
      this.type = this.transaction.type;
      this.direction = this.transaction.direction;
      this.header = 'Edit transaction'
    }
  }

  save() {
    if (this.form.valid) {
      const transaction: ITransaction = {
        account: this.form.get('account')?.value,
        amount: this.form.get('amount')?.value,
        date: this.form.get('date')?.value,
        details: this.form.get('details')?.value,
        direction: this.direction,
        otherParty: this.form.get('otherParty')?.value,
        type: this.type
      }
      if (this.transaction) {
        transaction.id = this.transaction.id;
        this.onEditSave.emit(transaction);
      } else {
        this.onAddSave.emit(transaction);
      }
    } else {
      // todo add validation
      console.error('here should be some validation')
    }
  }

  cancel() {
    this.onClose.emit(true);
  }

}
