import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AlertComponent } from './alert/alert.component';
import { AccordionComponent } from './accordion/accordion.component';
import { PanelComponent } from './accordion/panel/panel.component';
import { PanelsDirective } from './accordion/panels.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AlertComponent, AccordionComponent, PanelComponent, PanelsDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
