import {FocusIfDirective} from './focus-if.directive';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TestHelper} from '../helpers/test-helper';

@Component({
  selector: 'lib-test-component',
  template: `
    <input id="input" [fuIf]="value">
  `
})
class TestComponent {
  value = true;
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
      helper.checkFocus('#input');
      done();
    }, 0);
  });

  it('should blur element', (done) => {
    fixture.componentInstance.value = false;
    fixture.detectChanges();
    setTimeout(() => {
      const focusedElement = fixture.debugElement.query(By.css('#input'));
      expect(document.activeElement).not.toBe(focusedElement.nativeElement);
      done();
    }, 0);
  });

  it('should blur element after 1000ms', (done) => {
    setTimeout(() => {
      helper.checkFocus('#input');
      fixture.componentInstance.value = false;
      fixture.detectChanges();
    }, 500);
    setTimeout(() => {
      fixture.componentInstance.value = false;
      fixture.detectChanges();
    }, 1000);
    setTimeout(() => {
      const focusedElement = fixture.debugElement.query(By.css('#input'));
      expect(document.activeElement).not.toBe(focusedElement.nativeElement);
      done();
    }, 1001);
  });
});
