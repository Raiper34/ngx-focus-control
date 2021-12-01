import { NgModule } from '@angular/core';
import {FocusControlDirective} from './directives/focus-control.directive';
import { FocusSelectorDirective } from './directives/focus-selector.directive';
import { FocusGroupDirective } from './directives/focus-group.directive';
import { FocusParentDirective } from './directives/focus-parent.directive';
import { FocusAutoDirective } from './directives/focus-auto.directive';
import { FocusLockDirective } from './directives/focus-lock.directive';
import { FocusIfDirective } from './directives/focus-if.directive';
import { FocusObservableDirective } from './directives/focus-observable.directive';
import { FocusHistoryDirective } from './directives/focus-history.directive';
import { FocusSwitchDirective } from './directives/focus-switch.directive';
import { FocusCaseDirective } from './directives/focus-case.directive';



@NgModule({
  declarations: [
    FocusControlDirective,
    FocusSelectorDirective,
    FocusGroupDirective,
    FocusParentDirective,
    FocusAutoDirective,
    FocusLockDirective,
    FocusIfDirective,
    FocusObservableDirective,
    FocusHistoryDirective,
    FocusSwitchDirective,
    FocusCaseDirective,
  ],
  imports: [
  ],
  exports: [
    FocusControlDirective,
    FocusSelectorDirective,
    FocusGroupDirective,
    FocusParentDirective,
    FocusAutoDirective,
    FocusLockDirective,
    FocusIfDirective,
    FocusObservableDirective,
    FocusHistoryDirective,
    FocusSwitchDirective,
    FocusCaseDirective,
  ]
})
export class NgxFocusControlModule { }
