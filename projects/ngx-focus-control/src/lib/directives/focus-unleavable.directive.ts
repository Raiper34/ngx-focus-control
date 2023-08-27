import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[fuUnleavable]'
})
export class FocusUnleavableDirective {

  @Input('fuUnleavable') set config(val: boolean) {
    this.active = val;
  }
  active = false;

  constructor(private readonly el: ElementRef) { }

  @HostListener('blur')
  onBlur(): void {
    this.active && this.el.nativeElement.focus();
  }

}
