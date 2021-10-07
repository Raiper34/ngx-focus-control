import {Directive, ElementRef, HostListener, Inject, Input, Optional} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[fuSelector]'
})
export class FocusSelectorDirective {

  @Input('fuSelector') selector: string;

  constructor(@Inject(DOCUMENT) private readonly document: any,
              private readonly el: ElementRef) {
  }

  @HostListener(`keydown`, ['$event']) goTo($event: KeyboardEvent) {
    if ($event.key === 'Tab') {
      const elements = Array.from(this.document.querySelectorAll(this.selector));
      const index = elements.findIndex(item => item === this.el.nativeElement);
      if ($event.shiftKey && index > 0) {
        $event.preventDefault();
        $event.stopPropagation();
        (elements[index - 1] as HTMLElement)?.focus();
      } else if (!$event.shiftKey && index < elements.length - 1) {
        $event.preventDefault();
        $event.stopPropagation();
        (elements[index + 1] as HTMLElement)?.focus();
      }
    }
  }

}
