import { NgModule } from '@angular/core';
import {FocusControlDirective} from './directives/focus-control.directive';
import { FocusSelectorDirective } from './directives/focus-selector.directive';
import { FocusGroupDirective } from './directives/focus-group.directive';
import { FocusParentDirective } from './directives/focus-parent.directive';
import { FocusAutoDirective } from './directives/focus-auto.directive';
import { FocusLockDirective } from './directives/focus-lock.directive';
import { FocusIfDirective } from './directives/focus-if.directive';
import { FocusHistoryDirective } from './directives/focus-history.directive';
import { FocusSwitchDirective } from './directives/focus-switch.directive';
import { FocusCaseDirective } from './directives/focus-case.directive';
import { FocusDefaultDirective } from './directives/focus-default.directive';



@NgModule({
  declarations: [
    FocusControlDirective,
    FocusSelectorDirective,
    FocusGroupDirective,
    FocusParentDirective,
    FocusAutoDirective,
    FocusLockDirective,
    FocusIfDirective,
    FocusHistoryDirective,
    FocusSwitchDirective,
    FocusCaseDirective,
    FocusDefaultDirective,
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
    FocusHistoryDirective,
    FocusSwitchDirective,
    FocusCaseDirective,
    FocusDefaultDirective,
  ]
})
export class NgxFocusControlModule { }
