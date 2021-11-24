import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxFocusControlModule, FocusHistoryService} from 'ngx-focus-control';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    NgxFocusControlModule,
  ],
  providers: [FocusHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
