import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[fuCase]'
})
export class FocusCaseDirective {

  @Input('fuCase') value: string | number;

  constructor(public readonly el: ElementRef) {
  }
}
