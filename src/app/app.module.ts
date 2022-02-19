import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxFocusControlModule, FocusHistoryService} from 'ngx-focus-control';
import { FocusAutoDirectiveComponent } from './focus-auto-directive/focus-auto-directive.component';
import {RouterModule, Routes} from '@angular/router';
import { FocusControlDirectiveComponent } from './focus-control-directive/focus-control-directive.component';
import { HelperComponent } from './helper/helper.component';
import { FocusSelectorDirectiveComponent } from './focus-selector-directive/focus-selector-directive.component';
import { FocusParentDirectiveComponent } from './focus-parent-directive/focus-parent-directive.component';
import { FocusGroupDirectiveComponent } from './focus-group-directive/focus-group-directive.component';
import { FocusLockDirectiveComponent } from './focus-lock-directive/focus-lock-directive.component';
import { FocusIfDirectiveComponent } from './focus-if-directive/focus-if-directive.component';
import { FocusHistoryDirectiveComponent } from './focus-history-directive/focus-history-directive.component';
import { FocusSwitchDirectiveComponent } from './focus-switch-directive/focus-switch-directive.component';
import { InstalationComponent } from './instalation/instalation.component';

const routes: Routes = [
  {path: '', redirectTo: '/installation', pathMatch: 'full'},
  {path: 'installation', component: InstalationComponent},
  {path: 'focus-auto-directive', component: FocusAutoDirectiveComponent},
  {path: 'focus-control-directive', component: FocusControlDirectiveComponent},
  {path: 'focus-selector-directive', component: FocusSelectorDirectiveComponent},
  {path: 'focus-parent-directive', component: FocusParentDirectiveComponent},
  {path: 'focus-group-directive', component: FocusGroupDirectiveComponent},
  {path: 'focus-lock-directive', component: FocusLockDirectiveComponent},
  {path: 'focus-if-directive', component: FocusIfDirectiveComponent},
  {path: 'focus-history-directive', component: FocusHistoryDirectiveComponent},
  {path: 'focus-switch-directive', component: FocusSwitchDirectiveComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FocusAutoDirectiveComponent,
    FocusControlDirectiveComponent,
    HelperComponent,
    FocusSelectorDirectiveComponent,
    FocusParentDirectiveComponent,
    FocusGroupDirectiveComponent,
    FocusLockDirectiveComponent,
    FocusIfDirectiveComponent,
    FocusHistoryDirectiveComponent,
    FocusSwitchDirectiveComponent,
    InstalationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

    NgxFocusControlModule,
  ],
  providers: [FocusHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
