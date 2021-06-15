import {Component, Input, OnInit, Self} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NgControl
} from "@angular/forms";

export interface IErrorMessages {
  [key: string]: string;
}

// todo add dynamic aria-describedby
@Component({
  selector: 'nr-validation-input',
  /*  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ValidationInputComponent),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ValidationInputComponent),
      multi: true
    }],*/
  templateUrl: './validation-input.component.html',
  styleUrls: ['./validation-input.component.scss']
})
export class ValidationInputComponent implements OnInit, ControlValueAccessor {
  private _showPass: boolean = false;
  onTouched = () => {
  };
  onChange = (_: any) => {
  };
  public control: AbstractControl | null = null;


  get showPass(): boolean {
    return this.type === 'password' && this.showEye && this._showPass;
  }

  set showPass(val: boolean) {
    this._showPass = val;
  }

  private _value: string = '';
  @Input() options: any[] = [];

  @Input()
  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(this._value);
  }

  @Input() label: string = '';
  @Input() type: 'text' | 'number' | 'email' | 'password' | 'date' | 'textarea' | 'select' = 'text';
  private _showEye: boolean = false;
  @Input()
  get showEye(): boolean {
    return this._showEye;
  }

  set showEye(val: boolean) {
    this._showEye = val;
  }

  @Input() placeholder: string = '';
  private _errorMessages: IErrorMessages = {};
  @Input()
  get errorMessages(): IErrorMessages {
    return this._errorMessages;
  }

  set errorMessages(val: IErrorMessages) {
    this._errorMessages = val;
  }

  @Input() disabled: boolean = false;
  @Input() step: number | undefined;
  @Input() min: number | undefined;

  get isInvalid() {
    return this.control && !this.control.valid && this.control.touched
  }

  constructor(@Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }


  ngOnInit(): void {
    this.control = this.ngControl?.control;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(val: string): void {
    this.value = val;
  }

  change(value: string) {
    this.value = value.trim();
  }
}
