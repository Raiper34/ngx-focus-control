import {FocusLockDirective} from './focus-lock.directive';
import {Component, OnInit} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TestHelper} from '../helpers/test-helper';

const DELAY = 1000;

@Component({
  selector: 'lib-test-component',
  template: `
    <ul id="lock-1" fuLock>
      <li id="lock-1-item-1" tabindex="0">1</li>
      <li id="lock-1-item-2" tabindex="0">2</li>
      <li id="lock-1-item-3" tabindex="0">3</li>
      <li id="lock-1-item-4" tabindex="0">4</li>
      <li id="lock-1-item-5" *ngIf="shouldBePresent" tabindex="0">5</li>
    </ul>
    <ul id="lock-2" fuLock>
      <li id="lock-2-item-1" tabindex="0">1</li>
      <li id="lock-2-item-2" tabindex="0">2</li>
      <li id="lock-2-item-3" tabindex="0">3</li>
      <li id="lock-2-item-4" tabindex="0">4</li>
    </ul>
  `
})
class TestComponent implements OnInit {
  shouldBePresent = false;

  ngOnInit(): void {
    setTimeout(() => this.shouldBePresent = !this.shouldBePresent, DELAY);
  }

}

describe('FocusLockDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let helper: TestHelper<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusLockDirective, TestComponent],
    });

    TestBed.compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    helper = new TestHelper(fixture, expect);
  });

  it('should create an instance', () => {
    const directive = new FocusLockDirective(null, null, null);
    expect(directive).toBeTruthy();
  });

  it('should go to first element from last', (done) => {
    setTimeout( () => {
      const focusedElement = fixture.debugElement.query(By.css('#lock-1-item-4'));
      helper.tab(focusedElement);
      helper.checkFocus('#lock-1-item-1');
      done();
    }, 0);
  });

  it('should go to first element from last when children are changed', (done) => {
    setTimeout( () => {
      fixture.detectChanges();
    }, DELAY);
    setTimeout( () => {
      fixture.detectChanges();
      const focusedElement = fixture.debugElement.query(By.css('#lock-1-item-4'));
      helper.tab(focusedElement);
      helper.checkFocus('#lock-1-item-1', true);
      const focusedElement2 = fixture.debugElement.query(By.css('#lock-1-item-5'));
      helper.tab(focusedElement2);
      helper.checkFocus('#lock-1-item-1');
      done();
    }, DELAY + 1);
  });

  it('should go to last element from first', (done) => {
    setTimeout( () => {
      const focusedElement = fixture.debugElement.query(By.css('#lock-2-item-1'));
      helper.tab(focusedElement, true);
      helper.checkFocus('#lock-2-item-4');
      done();
    }, 0);
  });

  it('should do nothing when other than tab is pressed', (done) => {
    setTimeout( () => {
      const focusedElement = fixture.debugElement.query(By.css('#lock-1-item-4'));
      helper.escape(focusedElement);
      helper.checkFocusMultiple([
        '#lock-1-item-1', '#lock-1-item-2', '#lock-1-item-3', '#lock-1-item-4', '#lock-1',
        '#lock-2-item-1', '#lock-2-item-2', '#lock-2-item-3', '#lock-2-item-4', '#lock-2',
      ], true);
      done();
    }, 0);
  });
});
