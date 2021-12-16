import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[fuIf]'
})
export class FocusIfDirective {

  @Input('fuIf') set value(val: boolean) {
    if (this.isValueChanged(val)) {
      this._value = val;
      this.doActionByValue();
    }
  }

  _value: boolean;

  constructor(private readonly el: ElementRef) {
  }

  isValueChanged(val: boolean): boolean {
    return this._value !== val;
  }

  doActionByValue(): void {
    setTimeout(() => this._value ? this.el.nativeElement.focus() : this.el.nativeElement.blur());
  }

}
