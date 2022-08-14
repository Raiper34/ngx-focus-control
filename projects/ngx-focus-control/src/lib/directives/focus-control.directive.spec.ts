import { FocusControlDirective } from './focus-control.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {TestHelper} from '../helpers/test-helper';

@Component({
  selector: 'lib-test-component',
  template: `
    <input id="input-1" [fuControl]="{next: '#input-3', previous: input2}">
    <input id="input-2" #input2 [fuControl]="{next: '#input-1', previous: '#input-3'}">
    <input id="input-3" [fuControl]="{next: input2, previous: '#input-1'}">
    <input id="input-4" [fuControl]="{}">
    <input id="input-5" [fuControl]="{next: '#non-existing'}">
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

  it('should go to next user defined element using HtmlElement', () => {
    const focusedElement = fixture.debugElement.query(By.css('#input-3'));
    helper.tab(focusedElement);
    helper.checkFocus('#input-2');
  });

  it('should go to previous user defined element using HtmlElement', () => {
    const focusedElement = fixture.debugElement.query(By.css('#input-1'));
    helper.tab(focusedElement, true);
    helper.checkFocus('#input-2');
  });

  it('should do nothing when other than tab is pressed', () => {
    const focusedElement = fixture.debugElement.query(By.css('#input-1'));
    helper.escape(focusedElement);
    helper.checkFocusMultiple(['#input-1', '#input-2', '#input-3', '#input-4', '#input-5'], true);
  });

  it('should do nothing when next is not defined', () => {
    const focusedElement = fixture.debugElement.query(By.css('#input-4'));
    helper.tab(focusedElement);
    helper.checkFocusMultiple(['#input-1', '#input-2', '#input-3', '#input-4', '#input-5'], true);
  });

  it('should do nothing when previous is not defined', () => {
    const focusedElement = fixture.debugElement.query(By.css('#input-4'));
    helper.tab(focusedElement, true);
    helper.checkFocusMultiple(['#input-1', '#input-2', '#input-3', '#input-4', '#input-5'], true);
  });

  it('should do nothing when next or previous element does not exist', () => {
    const focusedElement = fixture.debugElement.query(By.css('#input-5'));
    helper.tab(focusedElement);
    helper.checkFocusMultiple(['#input-1', '#input-2', '#input-3', '#input-4', '#input-5'], true);
  });
});
