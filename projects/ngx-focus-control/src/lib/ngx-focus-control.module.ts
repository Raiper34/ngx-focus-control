import { NgModule } from '@angular/core';
import {FocusControlDirective} from './focus-control.directive';
import { FocusSelectorDirective } from './focus-selector.directive';
import { FocusGroupDirective } from './focus-group.directive';



@NgModule({
  declarations: [
    FocusControlDirective,
    FocusSelectorDirective,
    FocusGroupDirective,
  ],
  imports: [
  ],
  exports: [
    FocusControlDirective,
    FocusSelectorDirective,
    FocusGroupDirective,
  ]
})
export class NgxFocusControlModule { }
