import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.styl']
})
export class ButtonComponent implements OnInit {

  @Output() click = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
