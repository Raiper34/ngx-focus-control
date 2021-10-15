import { FocusAutoDirective } from './focus-auto.directive';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestHelper} from '../helpers/test-helper';

@Component({
  selector: 'lib-test-component',
  template: `
    <input id="input-1" fuAuto>
    <input id="input-2" [fuAuto]="0">
    <input id="input-3" [fuAuto]="500">
  `
})
class TestComponent {}

describe('FocusAutoDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let helper: TestHelper<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusAutoDirective, TestComponent],
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    helper = new TestHelper(fixture, expect);
  });

  it('should create an instance', () => {
    const directive = new FocusAutoDirective(null);
    expect(directive).toBeTruthy();
  });

  it('should focus element', () => {
    helper.checkFocus('#input-1');
  });

  it('should focus element with delay 0ms', (done) => {
    setTimeout(() => {
      helper.checkFocus('#input-2');
      done();
    }, 0);
  });

  it('should focus element with delay 500ms', (done) => {
    setTimeout(() => {
      helper.checkFocus('#input-3');
      done();
    }, 500);
  });
});
