import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[fuAuto]'
})
export class FocusAutoDirective {

  @Input('fuAuto') set delay(val: number) {
    this.focusElement(val);
  }

  constructor(private readonly el: ElementRef) { }

  private focusElement(delay: number): void {
    if (String(delay) === '') {
      this.el.nativeElement.focus();
    } else {
      setTimeout(() => this.el.nativeElement.focus(), delay);
    }
  }

}