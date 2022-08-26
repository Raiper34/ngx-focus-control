import {ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

export class TestHelper<T> {

  constructor(private readonly fixture: ComponentFixture<T>,
              private readonly expectFn: any) {}

  tab(element: DebugElement, shiftKey: boolean = false): void {
    this.keyDown(element, 'Tab', shiftKey);
  }

  keyDown(element: DebugElement, key: string, shiftKey: boolean = false): void {
    this.onKey(element, 'keydown', key, shiftKey);
  }

  enter(element: DebugElement): void {
    this.onKey(element, 'keyup', 'Enter');
  }

  escape(element: DebugElement): void {
    this.keyDown(element, 'Escape');
  }

  checkFocus(selector: string, revertExpect: boolean = false): void {
    const expected = this.fixture.debugElement.query(By.css(selector));
    if (revertExpect) {
      this.expectFn(document.activeElement).not.toBe(expected.nativeElement);
    } else {
      this.expectFn(document.activeElement).toBe(expected.nativeElement);
    }
  }

  checkFocusMultiple(selectors: string[], revertExpect: boolean): void {
    selectors.forEach(selector => this.checkFocus(selector, revertExpect));
  }

  private onKey(element: DebugElement, type: 'keydown' | 'keyup', key: string, shiftKey: boolean = false): void {
    element.nativeElement.dispatchEvent(new KeyboardEvent(type, {key, shiftKey}));
    this.fixture.detectChanges();
  }

}
