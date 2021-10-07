import { FocusSelectorDirective } from './focus-selector.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {TestHelper} from './test-helper';

@Component({
  selector: 'lib-test-component',
  template: `
    <input class="focus-selector-item" id="input-1" [fuSelector]="'.focus-selector-item'">
    <input id="input-2">
    <input class="focus-selector-item" id="input-3" [fuSelector]="'.focus-selector-item'">
  `
})
class TestComponent {}

describe('FocusSelectorDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let helper: TestHelper<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusSelectorDirective, TestComponent],
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    helper = new TestHelper(fixture, expect);
  });

  it('should create an instance', () => {
    const directive = new FocusSelectorDirective(null, null);
    expect(directive).toBeTruthy();
  });

  it('should go to next element with given selector', () => {
    const focusedElement = fixture.debugElement.query(By.css('#input-1'));
    helper.tab(focusedElement);
    helper.checkFocus('#input-3');
  });

  it('should go to previous element with given selector', () => {
    const focusedElement = fixture.debugElement.query(By.css('#input-3'));
    helper.tab(focusedElement, true);
    helper.checkFocus('#input-1');
  });
});
