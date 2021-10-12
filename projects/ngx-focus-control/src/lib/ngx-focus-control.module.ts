import { NgModule } from '@angular/core';
import {FocusControlDirective} from './directives/focus-control.directive';
import { FocusSelectorDirective } from './directives/focus-selector.directive';
import { FocusGroupDirective } from './directives/focus-group.directive';
import { FocusParentDirective } from './directives/focus-parent.directive';
import { FocusAutoDirective } from './directives/focus-auto.directive';



@NgModule({
  declarations: [
    FocusControlDirective,
    FocusSelectorDirective,
    FocusGroupDirective,
    FocusParentDirective,
    FocusAutoDirective,
  ],
  imports: [
  ],
  exports: [
    FocusControlDirective,
    FocusSelectorDirective,
    FocusGroupDirective,
    FocusParentDirective,
    FocusAutoDirective,
  ]
})
export class NgxFocusControlModule { }
