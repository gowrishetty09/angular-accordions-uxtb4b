import { Component, ViewChildren, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import {AlertComponent} from './alert/alert.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 4';
  @ViewChild('alert', {
    read: ViewContainerRef
  }) alerts;

  accordions = [{
    title: 'Zama',
    content: '<strong>Zama Content</strong>'
  }, {
    title: 'Rakesh',
    content: 'Rakesh Content'
  }]

  ngAfterViewInit() {
    console.log(this.alerts)
    // this.alerts.forEach(console.log)
  }
}
