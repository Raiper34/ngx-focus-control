import { FocusControlDirective } from './focus-control.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({
  selector: 'lib-test-component',
  template: `
    <input id="input-1" [ngxFocusControl]="{next: '#input-3', previous: '#input-2'}">
    <input id="input-2" [ngxFocusControl]="{next: '#input-1', previous: '#input-3'}">
    <input id="input-3" [ngxFocusControl]="{next: '#input-2', previous: '#input-1'}">
  `
})
class TestComponent {}

class TestHelper {

  constructor(private readonly fixture: ComponentFixture<TestComponent>) {}

  moveFocus(element: DebugElement, shiftKey: boolean = false): void {
    element.nativeElement.dispatchEvent(new KeyboardEvent('keydown', {key: 'Tab', shiftKey}));
    this.fixture.detectChanges();
  }

  checkFocus(selector: string): void {
    const expected = this.fixture.debugElement.query(By.css(selector));
    expect(document.activeElement).toBe(expected.nativeElement);
  }

}

describe('FocusControlDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let helper: TestHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusControlDirective, TestComponent],
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    helper = new TestHelper(fixture);
  });

  it('should create an instance', () => {
    const directive = new FocusControlDirective();
    expect(directive).toBeTruthy();
  });

  it('should go to next user defined element', () => {
    const focusedElement = fixture.debugElement.query(By.css('#input-2'));
    helper.moveFocus(focusedElement);
    helper.checkFocus('#input-1');
  });

  it('should go to previous user defined element', () => {
    const focusedElement = fixture.debugElement.query(By.css('#input-2'));
    helper.moveFocus(focusedElement, true);
    helper.checkFocus('#input-3');
  });
});
