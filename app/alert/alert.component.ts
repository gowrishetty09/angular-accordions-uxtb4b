import { Component, Input } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() type: string = "success";
  
  alert() {
    console.log(this.type);
  }

}