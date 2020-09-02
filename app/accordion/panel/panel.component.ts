import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input('title') title;
  @Output() onToggle = new EventEmitter();
  show = true;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;
    this.onToggle.next({
      show: this.show,
    })
  }

}