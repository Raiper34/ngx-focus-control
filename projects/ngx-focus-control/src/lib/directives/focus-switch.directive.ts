import {AfterContentInit, ContentChildren, Directive, Input} from '@angular/core';
import {FocusCaseDirective} from './focus-case.directive';

@Directive({
  selector: '[fuSwitch]'
})
export class FocusSwitchDirective implements AfterContentInit{

  @ContentChildren(FocusCaseDirective) cases: FocusCaseDirective[];
  @Input('fuSwitch') set value(val: string | number) {
    this._value = val;
    this.focusByValue();
  }
  private _value: string | number;

  constructor() { }

  ngAfterContentInit(): void {
    this.focusByValue();
  }

  focusByValue(): void {
    this.cases?.find(item => item.value === this._value)?.el.nativeElement.focus();
  }

}
