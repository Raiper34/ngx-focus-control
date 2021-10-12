import { FocusControlDirective } from './focus-control.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {TestHelper} from '../helpers/test-helper';

@Component({
  selector: 'lib-test-component',
  template: `
    <input id="input-1" [fuControl]="{next: '#input-3', previous: '#input-2'}">
    <input id="input-2" [fuControl]="{next: '#input-1', previous: '#input-3'}">
    <input id="input-3" [fuControl]="{next: '#input-2', previous: '#input-1'}">
  `
})
class TestComponent {}

describe('FocusControlDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let helper: TestHelper<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusControlDirective, TestComponent],
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    helper = new TestHelper(fixture, expect);
  });

  it('should create an instance', () => {
    const directive = new FocusControlDirective(null);
    expect(directive).toBeTruthy();
  });

  it('should go to next user defined element', () => {
    const focusedElement = fixture.debugElement.query(By.css('#input-2'));
    helper.tab(focusedElement);
    helper.checkFocus('#input-1');
  });

  it('should go to previous user defined element', () => {
    const focusedElement = fixture.debugElement.query(By.css('#input-2'));
    helper.tab(focusedElement, true);
    helper.checkFocus('#input-3');
  });
});
