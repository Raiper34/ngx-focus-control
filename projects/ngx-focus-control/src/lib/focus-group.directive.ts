import {Directive, ElementRef, HostListener, Inject, Input} from '@angular/core';
import {Helper} from './helper';
import {DOCUMENT} from '@angular/common';

enum Keys { // $event.key
  enterGroup = 'Enter',
  leaveGroup = 'Escape',
  navigation = 'Tab',
  navNext1 = 'ArrowDown',
  navNext2 = 'ArrowUp',
  navPrev1 = 'ArrowRight',
  navPrev2 = 'ArrowLeft',
}

interface FocusGroupConfig {
  selector?: string;
  tabIndex?: number;
}

const DEFAULT_SELECTOR = ':scope > *';
const DEFAULT_TAB_INDEX = 0;
const TAB_GROUP_CONTEXT_ATTR = 'data-tabGroupContext';

@Directive({
  selector: '[ngxFocusGroup]'
})
export class FocusGroupDirective {

  activeElement: HTMLElement;
  childKeyDownEventListener = this.childKeyDown.bind(this);
  elementBlurEventListener = this.elementBlurFunction.bind(this);

  @Input('ngxFocusGroup') config: FocusGroupConfig;

  get selector(): string {
    return this.config?.selector || DEFAULT_SELECTOR;
  }

  get tabIndex(): number {
    return this.config?.tabIndex || DEFAULT_TAB_INDEX;
  }

  constructor(@Inject(DOCUMENT) protected readonly document: any,
              private readonly el: ElementRef) {
  }

  @HostListener(`keyup.${Keys.enterGroup}`, ['$event']) enterGroup($event: KeyboardEvent) {
    Helper.stopEvent($event);
    const elements = this.getFocusableChildren();
    if (!this.activeElement && elements[0]) {
      this.initializeElement(elements[0]);
    }
  }

  private getFocusableChildren(): HTMLElement[] {
    return Array.from(this.el.nativeElement.querySelectorAll(this.selector));
  }

  private elementBlurFunction($event: Event): void {
    // setTimeout is important here, because next item is focused in next tick
    setTimeout(() => this.someChildIsFocused() && this.leaveGroup(($event as Event).target as HTMLElement, false));
  }

  private initializeElement(element: HTMLElement): void {
    if (element) {
      this.activeElement = element;
      if (element.hasAttribute('tabindex')) {
        element.setAttribute(TAB_GROUP_CONTEXT_ATTR, element.getAttribute('tabindex'));
      }
      element.setAttribute('tabindex', String(this.tabIndex));
      element.addEventListener('keydown', this.childKeyDownEventListener);
      element.addEventListener('blur', this.elementBlurEventListener);
      element.focus();
    }
  }

  private disposeElement(element: HTMLElement): void {
    this.activeElement = null;
    if (element.hasAttribute(TAB_GROUP_CONTEXT_ATTR)) {
      element.setAttribute('tabindex', element.getAttribute(TAB_GROUP_CONTEXT_ATTR));
    } else {
      element.removeAttribute('tabindex');
    }
    element.removeEventListener('keydown', this.childKeyDownEventListener);
    element.removeEventListener('blur', this.elementBlurEventListener);
  }

  private someChildIsFocused(): boolean {
    return this.getFocusableChildren().some(item => item === this.document.activeElement);
  }

  private childKeyDown($event: KeyboardEvent): void {
    if ($event.key === Keys.leaveGroup) {
      Helper.stopEvent($event);
      this.leaveGroup(($event as Event).target as HTMLElement);
    } else if (this.isPreviousNavigationKey($event)) {
      Helper.stopEvent($event);
      this.focusPrevious(($event as Event).target as HTMLElement);
    } else if (this.isNextNavigationKey($event)) {
      Helper.stopEvent($event);
      this.focusNext(($event as Event).target as HTMLElement);
    }
  }

  private isPreviousNavigationKey($event: KeyboardEvent): boolean {
    return ($event.key === Keys.navigation && $event.shiftKey) || $event.key === Keys.navPrev1 || $event.key === Keys.navPrev2;
  }

  private isNextNavigationKey($event: KeyboardEvent): boolean {
    return ($event.key === Keys.navigation && !$event.shiftKey) || $event.key === Keys.navNext1 || $event.key === Keys.navNext2;
  }

  private focusPrevious(current: HTMLElement): void {
    const focusableChildren = this.getFocusableChildren();
    const currentFocusedIndex = focusableChildren.findIndex(item => item === current);
    const previousFocusableIndex = currentFocusedIndex - 1 < 0 ? focusableChildren.length - 1 : currentFocusedIndex - 1;

    this.disposeElement(focusableChildren[currentFocusedIndex]);
    this.initializeElement(focusableChildren[previousFocusableIndex]);
  }

  private focusNext(current: HTMLElement): void {
    const focusableChildren = this.getFocusableChildren();
    const currentFocusedIndex = focusableChildren.findIndex(item => item === current);
    const nextFocusableIndex = currentFocusedIndex + 1 >= focusableChildren.length ? 0 : currentFocusedIndex + 1;

    this.disposeElement(focusableChildren[currentFocusedIndex]);
    this.initializeElement(focusableChildren[nextFocusableIndex]);
  }

  private leaveGroup(current: HTMLElement, shouldFocusGroup: boolean = true): void {
    this.disposeElement(current);
    if (shouldFocusGroup) {
      this.el.nativeElement.focus();
    }
  }

}
