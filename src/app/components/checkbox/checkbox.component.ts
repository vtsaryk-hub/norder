import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'nr-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() checkedText: string = '';
  @Input() uncheckedText: string = '';

  private _checked: boolean = false;
  @Input()
  get checked():boolean{
  return this._checked;
  }
  set checked(val: boolean){
  this._checked = val;
  }
  @Output() onChange = new EventEmitter<boolean>();


  constructor() {
  }

  ngOnInit(): void {
  }

  processOnChange(flag: boolean) {
    if (this.checked !== flag) {
      this.checked = flag;
      this.onChange.emit(flag);
    }
  }

}
