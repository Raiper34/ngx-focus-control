import { FocusHistoryDirective } from './focus-history.directive';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestHelper} from '../helpers/test-helper';
import {By} from '@angular/platform-browser';
import {FocusHistoryService} from '../services/focus-history.service';

@Component({
  selector: 'lib-test-component',
  template: `
    <input id="input" fuHistory>
  `
})
class TestComponent {
  value = true;
}

describe('FocusHistoryDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let helper: TestHelper<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FocusHistoryDirective, TestComponent],
      providers: [{provide: FocusHistoryService, useValue: jasmine.createSpyObj(['pushElement'])}]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    helper = new TestHelper(fixture, expect);
  });

  it('should create an instance', () => {
    const directive = new FocusHistoryDirective(null, null);
    expect(directive).toBeTruthy();
  });

  it('should call service on focus', () => {
    const element = fixture.debugElement.query(By.css('#input')).nativeElement;
    element.focus();
    const service = TestBed.inject(FocusHistoryService);
    expect(service.pushElement).toHaveBeenCalledWith(element);
  });
});

