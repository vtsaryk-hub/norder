import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nr-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() sidenav: any;
  isOpened: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  menuToggle() {
    this.isOpened = !this.isOpened;
    this.sidenav.toggle()
  }
}
