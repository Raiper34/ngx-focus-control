import {FocusSwitchDirective} from './focus-switch.directive';
import {FocusCaseDirective} from './focus-case.directive';
import {Subject} from 'rxjs';

let MOCK_CASE_COMPONENTS: FocusCaseDirective[] = [];
const DEFAULT_CASE = {el: {nativeElement: {focus: jasmine.createSpy('focusDefault')}}};

describe('FocusSwitchDirective', () => {

  beforeEach(() => {
    MOCK_CASE_COMPONENTS = [
      {value: 1, el: {nativeElement: {focus: jasmine.createSpy('focus1')}}},
      {value: 2, el: {nativeElement: {focus: jasmine.createSpy('focus2')}}},
      {value: 3, el: {nativeElement: {focus: jasmine.createSpy('focus3')}}},
      {value: 3, el: {nativeElement: {focus: jasmine.createSpy('focus4')}}},
    ];
  });

  it('should create an instance', () => {
    const directive = new FocusSwitchDirective();
    expect(directive).toBeTruthy();
  });

  it('should match case with value 1', (done) => {
    const directive = new FocusSwitchDirective();
    directive.cases = MOCK_CASE_COMPONENTS;
    directive.value = 1;
    setTimeout(() => {
      expect(MOCK_CASE_COMPONENTS[0].el.nativeElement.focus).toHaveBeenCalled();
      done();
    });
  });

  it('should match case with value 1 using observable', (done) => {
    const subject = new Subject<number>();
    const directive = new FocusSwitchDirective();
    directive.cases = MOCK_CASE_COMPONENTS;
    directive.value = subject;
    subject.next(1);
    setTimeout(() => {
      expect(MOCK_CASE_COMPONENTS[0].el.nativeElement.focus).toHaveBeenCalled();
      done();
    });
  });

  it('should match case with value 2', (done) => {
    const directive = new FocusSwitchDirective();
    directive.cases = MOCK_CASE_COMPONENTS;
    directive.value = 2;
    setTimeout(() => {
      expect(MOCK_CASE_COMPONENTS[1].el.nativeElement.focus).toHaveBeenCalled();
      done();
    });
  });

  it('should match case with value 2 using observable', (done) => {
    const subject = new Subject<number>();
    const directive = new FocusSwitchDirective();
    directive.cases = MOCK_CASE_COMPONENTS;
    directive.value = subject;
    subject.next(2);
    setTimeout(() => {
      expect(MOCK_CASE_COMPONENTS[1].el.nativeElement.focus).toHaveBeenCalled();
      done();
    });
  });

  it('should match case first occurrence', (done) => {
    const directive = new FocusSwitchDirective();
    directive.cases = MOCK_CASE_COMPONENTS;
    directive.value = 3;
    setTimeout(() => {
      expect(MOCK_CASE_COMPONENTS[2].el.nativeElement.focus).toHaveBeenCalled();
      expect(MOCK_CASE_COMPONENTS[3].el.nativeElement.focus).not.toHaveBeenCalled();
      done();
    });
  });

  it('should match case with value 1, reversed filling', (done) => {
    const directive = new FocusSwitchDirective();
    directive.value = 1;
    directive.cases = MOCK_CASE_COMPONENTS;
    setTimeout(() => {
      expect(MOCK_CASE_COMPONENTS[0].el.nativeElement.focus).toHaveBeenCalled();
      done();
    });
  });

  it('should not match when no matched condition', (done) => {
    const directive = new FocusSwitchDirective();
    directive.value = 100;
    directive.cases = MOCK_CASE_COMPONENTS;
    setTimeout(() => {
      MOCK_CASE_COMPONENTS.forEach(item => expect(item.el.nativeElement.focus).not.toHaveBeenCalled());
      done();
    });
  });

  it('should match default when present when no match', (done) => {
    const directive = new FocusSwitchDirective();
    directive.value = 100;
    directive.cases = MOCK_CASE_COMPONENTS;
    directive.defaultCase = DEFAULT_CASE;
    setTimeout(() => {
      expect(DEFAULT_CASE.el.nativeElement.focus).toHaveBeenCalled();
      done();
    });
  });

  it('should match default when no cases present', (done) => {
    const directive = new FocusSwitchDirective();
    directive.value = 100;
    directive.cases = [];
    directive.defaultCase = DEFAULT_CASE;
    setTimeout(() => {
      expect(DEFAULT_CASE.el.nativeElement.focus).toHaveBeenCalled();
      done();
    });
  });

  it('should unsubscribe when component is destroyed', () => {
    const directive = new FocusSwitchDirective();
    directive.unsubscribe$ = jasmine.createSpyObj('unsubscribe$', ['next', 'complete']);
    directive.ngOnDestroy();
    expect(directive.unsubscribe$.next).toHaveBeenCalled();
    expect(directive.unsubscribe$.complete).toHaveBeenCalled();
  });
});
