import {FocusGroupDirective} from './focus-group.directive';
import {Component, OnInit} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {TestHelper} from '../helpers/test-helper';
import {By} from '@angular/platform-browser';

const DELAY = 1000;

@Component({
  selector: 'lib-test-component',
  template: `
    <ul id="group-1" [fuGroup]="{selector: '.group-1-item', tabIndex: 0}" tabindex="0">
      <li id="group-1-item-1" class="group-1-item" tabindex="-1">1</li>
      <li id="group-1-item-2" class="group-1-item">2</li>
      <li id="group-1-item-3" class="group-1-item">3</li>
      <li id="group-1-item-4">4</li>
      <li id="group-1-item-5" class="group-1-item" *ngIf="shouldBePresent">1</li>
    </ul>
  `
})
class TestComponent implements OnInit {
  shouldBePresent = false;

  ngOnInit(): void {
    setTimeout(() => this.shouldBePresent = !this.shouldBePresent, DELAY);
  }

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
    const directive = new FocusGroupDirective(null, null, null);
    expect(directive).toBeTruthy();
  });

  it('should enter group', () => {
    const focusedElement = fixture.debugElement.query(By.css('#group-1'));
    helper.enter(focusedElement);
    helper.checkFocus('#group-1-item-1');
  });

  it('should persist tabindex of children and inherit from parent', () => {
    const element = fixture.debugElement.query(By.css('#group-1-item-1'));
    expect(element.nativeElement.getAttribute('tabindex')).toBe('-1');
    const focusedElement = fixture.debugElement.query(By.css('#group-1'));
    helper.enter(focusedElement);
    expect(element.nativeElement.getAttribute('tabindex')).toBe('0');
    const focusedElement2 = fixture.debugElement.query(By.css('#group-1-item-1'));
    helper.escape(focusedElement2);
    expect(element.nativeElement.getAttribute('tabindex')).toBe('-1');
  });

  it('should not have impact when enter 2x', () => {
    const focusedElement = fixture.debugElement.query(By.css('#group-1'));
    helper.enter(focusedElement);
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

  it('should go to next item using arrows', () => {
    const focusedElement = fixture.debugElement.query(By.css('#group-1'));
    helper.enter(focusedElement);

    const focusedElement1 = fixture.debugElement.query(By.css('#group-1-item-1'));
    helper.keyDown(focusedElement1, 'ArrowDown');
    helper.checkFocus('#group-1-item-2');

    const focusedElement2 = fixture.debugElement.query(By.css('#group-1-item-2'));
    helper.keyDown(focusedElement2, 'ArrowRight');
    helper.checkFocus('#group-1-item-3');
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

  it('should go to previous item using arrows', () => {
    const focusedElement = fixture.debugElement.query(By.css('#group-1'));
    helper.enter(focusedElement);

    const focusedElement1 = fixture.debugElement.query(By.css('#group-1-item-1'));
    helper.keyDown(focusedElement1, 'ArrowLeft', true);
    helper.checkFocus('#group-1-item-3');

    const focusedElement2 = fixture.debugElement.query(By.css('#group-1-item-3'));
    helper.keyDown(focusedElement2, 'ArrowUp', true);
    helper.checkFocus('#group-1-item-2');
  });

  it('should do nothing when press unknown key on child', () => {
    const focusedElement = fixture.debugElement.query(By.css('#group-1'));
    helper.enter(focusedElement);

    const focusedElement1 = fixture.debugElement.query(By.css('#group-1-item-1'));
    helper.keyDown(focusedElement1, 'Space');
    helper.checkFocus('#group-1-item-3', true);
  });

  it('should leave group when click outside of children', fakeAsync(() => {
    const focusedElement = fixture.debugElement.query(By.css('#group-1'));
    helper.enter(focusedElement);
    const focusedElement1 = fixture.debugElement.query(By.css('#group-1-item-1'));
    focusedElement1.nativeElement.dispatchEvent(new Event('blur'));
    focusedElement1.nativeElement.blur();
    fixture.detectChanges();
    tick(0);
    fixture.whenStable().then(() => {
      expect(document.activeElement).not.toBe(focusedElement1.nativeElement);
    });
  }));

  it('should work when dom changes', (done) => {
    setTimeout( () => {
      fixture.detectChanges();
    }, DELAY);
    setTimeout( () => {
      fixture.detectChanges();
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
      helper.checkFocus('#group-1-item-5');

      const focusedElement5 = fixture.debugElement.query(By.css('#group-1-item-5'));
      helper.tab(focusedElement5);
      helper.checkFocus('#group-1-item-1');
      done();
    }, DELAY + 1);
  });

});
