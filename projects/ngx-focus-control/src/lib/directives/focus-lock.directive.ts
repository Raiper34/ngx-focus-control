import {Directive, ElementRef, Inject, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {FOCUSABLE_ELEMENTS_SELECTOR} from '../helpers/focusable-elements.const';
import {Helper} from '../helpers/helper';
import {Keys} from '../helpers/keys.enum';

const DELAY = 0;
const MUTATION_OBSERVER_CONFIG = {
  childList: true,
  subtree: true,
};

@Directive({
  selector: '[fuLock]'
})
export class FocusLockDirective implements OnInit, OnDestroy {

  private firstChildKeyDownEventListener: () => void;
  private lastChildKeyDownEventListener: () => void;
  private observer: MutationObserver;

  constructor(@Inject(DOCUMENT) protected readonly document: any,
              protected readonly renderer: Renderer2,
              protected readonly el: ElementRef) {
  }

  ngOnInit(): void {
    setTimeout(() => this.createLock(), DELAY);
    this.observer = new MutationObserver(() => this.createLock());
    this.observer.observe(this.el.nativeElement, MUTATION_OBSERVER_CONFIG);
  }

  ngOnDestroy(): void {
    this.disposeLock();
    this.observer.disconnect();
  }

  private createLock(): void {
    this.disposeLock();
    const [firstChild, lastChild] = this.getChildren();
    console.log(lastChild);
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
