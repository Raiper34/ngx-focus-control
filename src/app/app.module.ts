import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxFocusControlModule} from 'ngx-focus-control';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    NgxFocusControlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
