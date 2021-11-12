import { FocusObservableDirective } from './focus-observable.directive';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestHelper} from '../helpers/test-helper';
import {Subject} from 'rxjs';
import {By} from '@angular/platform-browser';

function emit(fixture: ComponentFixture<TestComponent>, value: boolean): void {
  fixture.componentInstance.observable$.next(value);
  fixture.detectChanges();
}

@Component({
  selector: 'lib-test-component',
  template: `
    <input id="input" [fuObs]="observable$">
  `
})
class TestComponent {
  observable$ = new Subject<boolean>();
}

describe('FocusObservableDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let helper: TestHelper<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusObservableDirective, TestComponent],
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    helper = new TestHelper(fixture, expect);
  });

  it('should create an instance', () => {
    const directive = new FocusObservableDirective(null);
    expect(directive).toBeTruthy();
  });

  it('should focus when emit true', () => {
    emit(fixture, true);
    helper.checkFocus('#input');
  });

  it('should not be focused when emit true and then false', () => {
    emit(fixture, true);
    emit(fixture, false);
    helper.checkFocus('#input', true);
  });

  it('should  be focused when emit true -> false -> true', () => {
    emit(fixture, true);
    emit(fixture, false);
    emit(fixture, true);
    helper.checkFocus('#input');
  });
});
