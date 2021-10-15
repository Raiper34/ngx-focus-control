import {FocusLockDirective} from './focus-lock.directive';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TestHelper} from '../helpers/test-helper';

@Component({
  selector: 'lib-test-component',
  template: `
    <ul id="lock-1" fuLock>
      <li id="lock-1-item-1" tabindex="0">1</li>
      <li id="lock-1-item-2" tabindex="0">2</li>
      <li id="lock-1-item-3" tabindex="0">3</li>
      <li id="lock-1-item-4" tabindex="0">4</li>
    </ul>
    <ul id="lock-2" fuLock>
      <li id="lock-2-item-1" tabindex="0">1</li>
      <li id="lock-2-item-2" tabindex="0">2</li>
      <li id="lock-2-item-3" tabindex="0">3</li>
      <li id="lock-2-item-4" tabindex="0">4</li>
    </ul>
  `
})
class TestComponent {
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

  it('should go to last element from first', (done) => {
    setTimeout( () => {
      const focusedElement = fixture.debugElement.query(By.css('#lock-2-item-1'));
      helper.tab(focusedElement, true);
      helper.checkFocus('#lock-2-item-4');
      done();
    }, 0);
  });
});
