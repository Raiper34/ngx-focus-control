import {ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

export class TestHelper<T> {

  constructor(private readonly fixture: ComponentFixture<T>,
              private readonly expectFn: any) {}

  tab(element: DebugElement, shiftKey: boolean = false): void {
    element.nativeElement.dispatchEvent(new KeyboardEvent('keydown', {key: 'Tab', shiftKey}));
    this.fixture.detectChanges();
  }

  enter(element: DebugElement): void {
    element.nativeElement.dispatchEvent(new KeyboardEvent('keyup', {key: 'Enter'}));
    this.fixture.detectChanges();
  }

  escape(element: DebugElement): void {
    element.nativeElement.dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape'}));
    this.fixture.detectChanges();
  }

  checkFocus(selector: string, revertExpect: boolean = false): void {
    const expected = this.fixture.debugElement.query(By.css(selector));
    if (revertExpect) {
      this.expectFn(document.activeElement).not.toBe(expected.nativeElement);
    } else {
      this.expectFn(document.activeElement).toBe(expected.nativeElement);
    }
  }

  checkFocusMultiple(selectors: string[], revertExpect: boolean = false): void {
    selectors.forEach(selector => this.checkFocus(selector, revertExpect));
  }

}
