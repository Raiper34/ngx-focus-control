import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[fuDefault]'
})
export class FocusDefaultDirective {

  constructor(public readonly el: ElementRef) { }

}
