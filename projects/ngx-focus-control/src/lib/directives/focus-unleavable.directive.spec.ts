import { FocusUnleavableDirective } from './focus-unleavable.directive';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestHelper} from '../helpers/test-helper';
import {By} from '@angular/platform-browser';

@Component({
  selector: 'lib-test-component',
  template: `
    <input id="input-1" [fuUnleavable]="condition">
  `
})
class TestComponent {
  condition = true;
}

function focusAndBlur(fixture: ComponentFixture<TestComponent>, helper: TestHelper<TestComponent>): void {
  const focusedElement = fixture.debugElement.query(By.css('#input-1'));
  focusedElement.nativeElement.focus();

  helper.checkFocus('#input-1');
  focusedElement.nativeElement.blur();
  focusedElement.nativeElement.dispatchEvent(new Event('blur'));
}

describe('FocusUnleavableDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let helper: TestHelper<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusUnleavableDirective, TestComponent],
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    helper = new TestHelper(fixture, expect);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new FocusUnleavableDirective(null);
    expect(directive).toBeTruthy();
  });

  it('should not blur unleavable element', () => {
    focusAndBlur(fixture, helper);
    helper.checkFocus('#input-1');
  });

  it('should blur unleavable element when condition is not met', () => {
    component.condition = false;
    fixture.detectChanges();
    focusAndBlur(fixture, helper);
    helper.checkFocus('#input-1', true);
  });

  it('should unleavable directive works when condition changes', () => {
    focusAndBlur(fixture, helper);
    helper.checkFocus('#input-1');

    component.condition = false;
    fixture.detectChanges();
    focusAndBlur(fixture, helper);
    helper.checkFocus('#input-1', true);
  });
});
