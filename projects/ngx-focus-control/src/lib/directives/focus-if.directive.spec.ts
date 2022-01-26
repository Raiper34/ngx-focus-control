import {FocusIfDirective} from './focus-if.directive';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestHelper} from '../helpers/test-helper';
import {Subject} from 'rxjs';

function emit(fixture: ComponentFixture<TestComponent>, value: boolean): void {
  fixture.componentInstance.observable$.next(value);
  fixture.detectChanges();
}

@Component({
  selector: 'lib-test-component',
  template: `
    <input id="inputVal" [fuIf]="value">
    <input id="inputObs" [fuIf]="observable$.asObservable()">
  `
})
class TestComponent {
  value = true;
  observable$ = new Subject<boolean>();
}

describe('FocusIfDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let helper: TestHelper<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusIfDirective, TestComponent],
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    helper = new TestHelper(fixture, expect);
  });

  it('should create an instance', () => {
    const directive = new FocusIfDirective(null);
    expect(directive).toBeTruthy();
  });

  it('should focus element', (done) => {
    setTimeout(() => {
      helper.checkFocus('#inputVal');
      done();
    }, 0);
  });

  it('should blur element', (done) => {
    fixture.componentInstance.value = false;
    fixture.detectChanges();
    setTimeout(() => {
      helper.checkFocus('#inputVal', true);
      done();
    }, 0);
  });

  it('should blur element after 1000ms', (done) => {
    setTimeout(() => {
      helper.checkFocus('#inputVal');
      fixture.componentInstance.value = false;
      fixture.detectChanges();
    }, 500);
    setTimeout(() => {
      fixture.componentInstance.value = false;
      fixture.detectChanges();
    }, 1000);
    setTimeout(() => {
      helper.checkFocus('#inputVal', true);
      done();
    }, 1001);
  });

  it('should focus when emit true', (done) => {
    emit(fixture, true);
    setTimeout(() => {
      helper.checkFocus('#inputObs');
      done();
    }, 0);
  });

  it('should not be focused when emit true and then false', (done) => {
    emit(fixture, true);
    setTimeout(() => emit(fixture, false), 100);
    setTimeout(() => {
      helper.checkFocus('#inputObs', true);
      done();
    }, 200);
  });

  it('should  be focused when emit true -> false -> true', (done) => {
    emit(fixture, true);
    setTimeout(() => emit(fixture, false), 100);
    setTimeout(() => emit(fixture, true), 200);
    setTimeout(() => {
      helper.checkFocus('#inputObs');
      done();
    }, 300);
  });
});
