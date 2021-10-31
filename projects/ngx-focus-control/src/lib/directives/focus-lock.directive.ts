import {Directive, ElementRef, Inject, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {FOCUSABLE_ELEMENTS_SELECTOR} from '../helpers/focusable-elements.const';
import {Helper} from '../helpers/helper';
import {Keys} from '../helpers/keys.enum';

const DELAY = 0;

@Directive({
  selector: '[fuLock]'
})
export class FocusLockDirective implements OnInit, OnDestroy {

  firstChildKeyDownEventListener: () => void;
  lastChildKeyDownEventListener: () => void;

  constructor(@Inject(DOCUMENT) protected readonly document: any,
              protected readonly renderer: Renderer2,
              protected readonly el: ElementRef) {
  }

  ngOnInit(): void {
    setTimeout(() => this.createLock(), DELAY);
  }

  ngOnDestroy(): void {
    this.disposeLock();
  }

  private createLock(): void {
    const [firstChild, lastChild] = this.getChildren();
    this.firstChildKeyDownEventListener = this.renderer.listen(firstChild, 'keydown',
      ($event: KeyboardEvent) => this.childKeyDown($event, lastChild, true));
    this.lastChildKeyDownEventListener = this.renderer.listen(lastChild, 'keydown',
      ($event: KeyboardEvent) => this.childKeyDown($event, firstChild, false));
  }

  private getChildren(): [HTMLElement, HTMLElement] {
    const children = this.el.nativeElement.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR);
    return [children[0], children[children.length - 1]];
  }

  private disposeLock(): void {
    this.firstChildKeyDownEventListener && this.firstChildKeyDownEventListener();
    this.lastChildKeyDownEventListener && this.lastChildKeyDownEventListener();
  }

  private childKeyDown($event: KeyboardEvent, targetElem: HTMLElement, shouldShiftBePressed: boolean): void {
    if ($event.key === Keys.Tab && $event.shiftKey === shouldShiftBePressed) {
      Helper.stopEvent($event);
      targetElem.focus();
    }
  }
}
