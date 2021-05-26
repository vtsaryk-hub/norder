import {Component, Input, OnInit} from '@angular/core';

type chipsClassType = 'alert' | 'warning' | 'success' | 'info';

@Component({
  selector: 'nr-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  @Input() type?: chipsClassType;

  constructor() {
  }

  ngOnInit(): void {
  }

}
