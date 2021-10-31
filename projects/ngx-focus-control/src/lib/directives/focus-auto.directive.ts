import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[fuAuto]'
})
export class FocusAutoDirective {

  @Input('fuAuto') set delay(val: number) {
    this.focusElement(val);
  }

  constructor(private readonly el: ElementRef) { }

  protected focusElement(delay: number): void {
    setTimeout(() => this.el.nativeElement.focus(), delay || 0);
  }

}
