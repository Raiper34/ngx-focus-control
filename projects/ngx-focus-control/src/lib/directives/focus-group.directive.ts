import {Directive, ElementRef, HostListener, Inject, Input, Renderer2} from '@angular/core';
import {Helper} from '../helpers/helper';
import {DOCUMENT} from '@angular/common';
import {Keys} from '../helpers/keys.enum';

const ControlKeys = {
  enterGroup: Keys.Enter,
  leaveGroup: Keys.Escape,
  navigation: Keys.Tab,
  navNext1: Keys.ArrowDown,
  navNext2: Keys.ArrowRight,
  navPrev1: Keys.ArrowUp,
  navPrev2: Keys.ArrowLeft,
};

interface FocusGroupConfig {
  selector?: string;
  tabIndex?: number;
}

const DEFAULT_SELECTOR = ':scope > *';
const DEFAULT_TAB_INDEX = 0;
const TAB_GROUP_CONTEXT_ATTR = 'data-tabGroupContext';

@Directive({
  selector: '[fuGroup]'
})
export class FocusGroupDirective {

  activeElement: HTMLElement;
  childKeyDownEventListener: () => void;
  elementBlurEventListener: () => void;

  @Input('fuGroup') config: FocusGroupConfig | undefined;

  get selector(): string {
    return this.config?.selector || DEFAULT_SELECTOR;
  }

  get tabIndex(): number {
    return this.config?.tabIndex || DEFAULT_TAB_INDEX;
  }

  constructor(@Inject(DOCUMENT) protected readonly document: any,
              protected readonly renderer: Renderer2,
              protected readonly el: ElementRef) {
  }

  @HostListener(`keyup.${ControlKeys.enterGroup}`, ['$event']) enterGroup($event: KeyboardEvent) {
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
    setTimeout(() => !this.someChildIsFocused() && this.leaveGroup(($event as Event).target as HTMLElement, false));
  }

  private initializeElement(element: HTMLElement): void {
    if (element) {
      this.activeElement = element;
      if (element.hasAttribute('tabindex')) {
        this.renderer.setAttribute(element, TAB_GROUP_CONTEXT_ATTR, element.getAttribute('tabindex'));
      }
      this.renderer.setAttribute(element, 'tabindex', String(this.tabIndex));
      this.childKeyDownEventListener = this.renderer.listen(element, 'keydown', this.childKeyDown.bind(this));
      this.elementBlurEventListener = this.renderer.listen(element, 'blur', this.elementBlurFunction.bind(this));
      element.focus();
    }
  }

  private disposeElement(element: HTMLElement): void {
    this.activeElement = null;
    if (element.hasAttribute(TAB_GROUP_CONTEXT_ATTR)) {
      this.renderer.setAttribute(element, 'tabindex', element.getAttribute(TAB_GROUP_CONTEXT_ATTR));
    } else {
      this.renderer.removeAttribute(element, 'tabindex');
    }
    this.childKeyDownEventListener();
    this.elementBlurEventListener();
  }

  private someChildIsFocused(): boolean {
    return this.getFocusableChildren().some(item => item === this.document.activeElement);
  }

  private childKeyDown($event: KeyboardEvent): void {
    if ($event.key === ControlKeys.leaveGroup) {
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
    return ($event.key === ControlKeys.navigation && $event.shiftKey) ||
      $event.key === ControlKeys.navPrev1 || $event.key === ControlKeys.navPrev2;
  }

  private isNextNavigationKey($event: KeyboardEvent): boolean {
    return ($event.key === ControlKeys.navigation && !$event.shiftKey) ||
      $event.key === ControlKeys.navNext1 || $event.key === ControlKeys.navNext2;
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
