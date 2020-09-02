import { Component, OnInit, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import {PanelComponent} from './panel/panel.component';
@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit, AfterContentInit {

  @ContentChildren(PanelComponent) panels: QueryList<PanelComponent>;

  constructor() { }

  ngOnInit() {
  }

  onToggleSubscriber(p) {
    return data => {
      this.panels.forEach(panel => {
        if (data.show && panel !== p) {
          panel.show = false;
        }
      })
    }
  }

  ngAfterContentInit() {
    this.panels.forEach((panel, i) => {
      panel.onToggle.subscribe(this.onToggleSubscriber(panel))
      panel.show = i < 1;
    })
  }

  ngAfterContent

}