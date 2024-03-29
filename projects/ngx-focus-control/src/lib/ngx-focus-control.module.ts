import { NgModule } from '@angular/core';
import {FocusControlDirective} from './directives/focus-control.directive';
import { FocusSelectorDirective } from './directives/focus-selector.directive';
import { FocusGroupDirective } from './directives/focus-group.directive';
import { FocusAutoDirective } from './directives/focus-auto.directive';
import { FocusLockDirective } from './directives/focus-lock.directive';
import { FocusIfDirective } from './directives/focus-if.directive';
import { FocusHistoryDirective } from './directives/focus-history.directive';
import { FocusSwitchDirective } from './directives/focus-switch.directive';
import { FocusCaseDirective } from './directives/focus-case.directive';
import { FocusDefaultDirective } from './directives/focus-default.directive';
import {FocusUnleavableDirective} from './directives/focus-unleavable.directive';



@NgModule({
  declarations: [
    FocusControlDirective,
    FocusSelectorDirective,
    FocusGroupDirective,
    FocusAutoDirective,
    FocusLockDirective,
    FocusIfDirective,
    FocusHistoryDirective,
    FocusSwitchDirective,
    FocusCaseDirective,
    FocusDefaultDirective,
    FocusUnleavableDirective,
  ],
  imports: [
  ],
  exports: [
    FocusControlDirective,
    FocusSelectorDirective,
    FocusGroupDirective,
    FocusAutoDirective,
    FocusLockDirective,
    FocusIfDirective,
    FocusHistoryDirective,
    FocusSwitchDirective,
    FocusCaseDirective,
    FocusDefaultDirective,
    FocusUnleavableDirective,
  ]
})
export class NgxFocusControlModule { }
