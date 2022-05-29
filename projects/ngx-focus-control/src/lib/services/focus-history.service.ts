import { Injectable } from '@angular/core';

const HISTORY_SIZE = 500;

@Injectable()
export class FocusHistoryService {

  private focusedElements: HTMLElement[] = [];

  constructor() { }

  getHistory(): HTMLElement[] {
    return this.focusedElements;
  }

  pushElement(element: HTMLElement): void {
    this.focusedElements = [...this.focusedElements, element].slice(-HISTORY_SIZE);
  }

  popElement(): void {
    this.focusedElements = this.focusedElements.slice(0, -1);
  }

  clearHistory(): void {
    this.focusedElements = [];
  }

  getLastElement(): HTMLElement {
    return this.focusedElements[this.focusedElements.length - 1];
  }

  focusPrevious(): void {
    this.popElement();
    this.getLastElement()?.focus();
    this.popElement(); // focus method adds element into array again, but it is already there, so newly one we need remove
  }
}
