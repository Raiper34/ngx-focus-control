import {FocusGroupDirective} from './focus-group.directive';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestHelper} from './test-helper';
import {By} from '@angular/platform-browser';

@Component({
  selector: 'lib-test-component',
  template: `
    <ul id="group-1" [ngxFocusGroup]="{selector: '.group-1-item', tabIndex: 0}" tabindex="0">
      <li id="group-1-item-1" class="group-1-item">1</li>
      <li id="group-1-item-2" class="group-1-item">2</li>
      <li id="group-1-item-3" class="group-1-item">3</li>
      <li id="group-1-item-4">4</li>
    </ul>
  `
})
class TestComponent {
}

describe('FocusGroupDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let helper: TestHelper<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusGroupDirective, TestComponent],
    });

    TestBed.compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    helper = new TestHelper(fixture, expect);
  });

  it('should create an instance', () => {
    const directive = new FocusGroupDirective(null, null);
    expect(directive).toBeTruthy();
  });

  it('should enter group', () => {
    const focusedElement = fixture.debugElement.query(By.css('#group-1'));
    helper.enter(focusedElement);
    helper.checkFocus('#group-1-item-1');
  });

  it('should leave group', () => {
    const focusedElement = fixture.debugElement.query(By.css('#group-1'));
    helper.enter(focusedElement);
    helper.checkFocus('#group-1-item-1');
    const focusedElement2 = fixture.debugElement.query(By.css('#group-1-item-1'));
    helper.escape(focusedElement2);
    helper.checkFocus('#group-1');
  });

  it('should go to next item', () => {
    const focusedElement = fixture.debugElement.query(By.css('#group-1'));
    helper.enter(focusedElement);

    const focusedElement1 = fixture.debugElement.query(By.css('#group-1-item-1'));
    helper.tab(focusedElement1);
    helper.checkFocus('#group-1-item-2');

    const focusedElement2 = fixture.debugElement.query(By.css('#group-1-item-2'));
    helper.tab(focusedElement2);
    helper.checkFocus('#group-1-item-3');

    const focusedElement3 = fixture.debugElement.query(By.css('#group-1-item-3'));
    helper.tab(focusedElement3);
    helper.checkFocus('#group-1-item-1');
  });

  it('should go to previous item', () => {
    const focusedElement = fixture.debugElement.query(By.css('#group-1'));
    helper.enter(focusedElement);

    const focusedElement1 = fixture.debugElement.query(By.css('#group-1-item-1'));
    helper.tab(focusedElement1, true);
    helper.checkFocus('#group-1-item-3');

    const focusedElement2 = fixture.debugElement.query(By.css('#group-1-item-3'));
    helper.tab(focusedElement2, true);
    helper.checkFocus('#group-1-item-2');

    const focusedElement3 = fixture.debugElement.query(By.css('#group-1-item-2'));
    helper.tab(focusedElement3, true);
    helper.checkFocus('#group-1-item-1');
  });

});
