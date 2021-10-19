import {Directive, ElementRef, HostListener, Inject, Input} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {FOCUSABLE_ELEMENTS_SELECTOR} from '../helpers/focusable-elements.const';
import {Helper} from '../helpers/helper';
import {Keys} from '../helpers/keys.enum';

const FOCUSABLE_ELEMENTS_WITHIN_SELECTOR = `:scope ${FOCUSABLE_ELEMENTS_SELECTOR}`;

@Directive({
  selector: '[fuParent]'
})
export class FocusParentDirective {

  @Input('fuParent') selector: string;

  constructor(@Inject(DOCUMENT) protected readonly document: any,
              protected readonly el: ElementRef) {
  }

  @HostListener(`keyup.${Keys.Enter}`, ['$event']) goToChildren($event: KeyboardEvent) {
    if ($event.target !== this.el.nativeElement) {
      return;
    }
    Helper.stopEvent($event);
    this.getChildren()[0]?.focus();
  }

  @HostListener(`keydown`, ['$event']) protected goTo($event: KeyboardEvent) {
    if ($event.target !== this.el.nativeElement) {
      return;
    }
    if ($event.key === Keys.Tab) {
      const elements = Array.from(this.document.querySelectorAll(this.selector));
      const index = elements.findIndex(item => item === this.el.nativeElement);
      if ($event.shiftKey && index >  0) {
        Helper.stopEvent($event);
        (elements[index - 1] as HTMLElement)?.focus();
      } else if (!$event.shiftKey) {
        if (index < elements.length - 1) {
          Helper.stopEvent($event);
          (elements[index + 1] as HTMLElement)?.focus();
        } else {
          const children = this.getChildren();
          // a bit hacky, focus last element but when event is not prevented, it continue to next element
          children[children.length - 1]?.focus();
        }
      }
    }
  }

  private getChildren(): HTMLElement[] {
    return this.el.nativeElement.querySelectorAll(FOCUSABLE_ELEMENTS_WITHIN_SELECTOR);
  }

}
