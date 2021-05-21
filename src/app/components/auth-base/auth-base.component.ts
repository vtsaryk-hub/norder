import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'nr-auth-base',
  template: '',
  styles: []
})
export class AuthBaseComponent {
  @Output() onNavigate = new EventEmitter()

  constructor() {
  }
}
