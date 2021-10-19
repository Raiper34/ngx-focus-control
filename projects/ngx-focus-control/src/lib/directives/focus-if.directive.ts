import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[fuIf]'
})
export class FocusIfDirective {

  @Input('fuIf') set value(val: boolean) {
    if (this.value !== val) {
      this._value = val;
      if (this.value) {
        this.el.nativeElement.focus();
      } else {
        this.el.nativeElement.blur();
      }
    }
  }

  get value(): boolean {
    return this._value;
  }

  _value: boolean;

  constructor(private readonly el: ElementRef) {
  }

}
