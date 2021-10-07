import { NgModule } from '@angular/core';
import {FocusControlDirective} from './focus-control.directive';
import { FocusSelectorDirective } from './focus-selector.directive';
import { FocusGroupDirective } from './focus-group.directive';
import { FocusParentDirective } from './focus-parent.directive';
import { FocusAutoDirective } from './focus-auto.directive';



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
