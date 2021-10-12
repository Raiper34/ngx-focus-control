import {FocusParentDirective} from './focus-parent.directive';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestHelper} from '../helpers/test-helper';
import {By} from '@angular/platform-browser';

@Component({
  selector: 'lib-test-component',
  template: `
    <div tabindex="0" id="parent-1" class="focus-selector-parent" [fuParent]="'.focus-selector-parent'">
      <input class="focus-selector-item" id="input-1">
      <input class="focus-selector-item" id="input-2">
    </div>
    <div tabindex="0" id="parent-2" class="focus-selector-parent" [fuParent]="'.focus-selector-parent'">
      <input class="focus-selector-item" id="input-3">
      <input class="focus-selector-item" id="input-4">
    </div>
  `
})
class TestComponent {
}

describe('FocusParentDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let helper: TestHelper<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusParentDirective, TestComponent],
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    helper = new TestHelper(fixture, expect);
  });

  it('should create an instance', () => {
    const directive = new FocusParentDirective(null, null);
    expect(directive).toBeTruthy();
  });

  it('should go to next parent element with given selector', () => {
    const focusedElement = fixture.debugElement.query(By.css('#parent-1'));
    helper.tab(focusedElement);
    helper.checkFocus('#parent-2');
  });

  it('should go to previous parent element with given selector', () => {
    const focusedElement = fixture.debugElement.query(By.css('#parent-2'));
    helper.tab(focusedElement, true);
    helper.checkFocus('#parent-1');
  });

  it('should go to first child element', () => {
    const focusedElement = fixture.debugElement.query(By.css('#parent-1'));
    helper.enter(focusedElement);
    helper.checkFocus('#input-1');

    const focusedElement2 = fixture.debugElement.query(By.css('#parent-2'));
    helper.enter(focusedElement2);
    helper.checkFocus('#input-3');
  });
});
