import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {formatDate} from "@angular/common";

@Component({
  selector: 'nr-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() onInput = new EventEmitter(true);
  @Input() placeholder: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
