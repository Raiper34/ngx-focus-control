import { FocusSelectorDirective } from './focus-selector.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({
  selector: 'lib-test-component',
  template: `
    <input class="focus-selector-item" id="input-1" [ngxFocusSelector]="'.focus-selector-item'">
    <input id="input-2">
    <input class="focus-selector-item" id="input-3" [ngxFocusSelector]="'.focus-selector-item'">
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

describe('FocusSelectorDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let helper: TestHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusSelectorDirective, TestComponent],
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    helper = new TestHelper(fixture);
  });

  it('should create an instance', () => {
    const directive = new FocusSelectorDirective(null, null);
    expect(directive).toBeTruthy();
  });

  it('should go to next element with given selector', () => {
    const focusedElement = fixture.debugElement.query(By.css('#input-1'));
    helper.moveFocus(focusedElement);
    helper.checkFocus('#input-3');
  });

  it('should go to previous element with given selector', () => {
    const focusedElement = fixture.debugElement.query(By.css('#input-3'));
    helper.moveFocus(focusedElement, true);
    helper.checkFocus('#input-1');
  });
});
