import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxFocusControlModule, FocusHistoryService} from 'ngx-focus-control';
import { FocusAutoDirectiveComponent } from './focus-auto-directive/focus-auto-directive.component';
import {RouterModule, Routes} from '@angular/router';
import { FocusControlDirectiveComponent } from './focus-control-directive/focus-control-directive.component';
import { HelperComponent } from './helper/helper.component';
import { FocusSelectorDirectiveComponent } from './focus-selector-directive/focus-selector-directive.component';
import { FocusGroupDirectiveComponent } from './focus-group-directive/focus-group-directive.component';
import { FocusLockDirectiveComponent } from './focus-lock-directive/focus-lock-directive.component';
import { FocusIfDirectiveComponent } from './focus-if-directive/focus-if-directive.component';
import { FocusHistoryDirectiveComponent } from './focus-history-directive/focus-history-directive.component';
import { FocusSwitchDirectiveComponent } from './focus-switch-directive/focus-switch-directive.component';
import { InstalationComponent } from './instalation/instalation.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import {FocusUnleavableDirectiveComponent} from './focus-unleavable-directive/focus-unleavable-directive.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: '/installation', pathMatch: 'full'},
  {path: 'installation', component: InstalationComponent},
  {path: 'focus-auto-directive', component: FocusAutoDirectiveComponent},
  {path: 'focus-control-directive', component: FocusControlDirectiveComponent},
  {path: 'focus-selector-directive', component: FocusSelectorDirectiveComponent},
  {path: 'focus-group-directive', component: FocusGroupDirectiveComponent},
  {path: 'focus-lock-directive', component: FocusLockDirectiveComponent},
  {path: 'focus-if-directive', component: FocusIfDirectiveComponent},
  {path: 'focus-history-directive', component: FocusHistoryDirectiveComponent},
  {path: 'focus-switch-directive', component: FocusSwitchDirectiveComponent},
  {path: 'focus-unleavable-directive', component: FocusUnleavableDirectiveComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FocusAutoDirectiveComponent,
    FocusControlDirectiveComponent,
    HelperComponent,
    FocusSelectorDirectiveComponent,
    FocusGroupDirectiveComponent,
    FocusLockDirectiveComponent,
    FocusIfDirectiveComponent,
    FocusHistoryDirectiveComponent,
    FocusSwitchDirectiveComponent,
    FocusUnleavableDirectiveComponent,
    InstalationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HighlightModule,
    FormsModule,

    NgxFocusControlModule,
  ],
  providers: [
    FocusHistoryService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
