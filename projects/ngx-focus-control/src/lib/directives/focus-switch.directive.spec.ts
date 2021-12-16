import {FocusSwitchDirective} from './focus-switch.directive';
import {FocusCaseDirective} from './focus-case.directive';

const MOCK_CASE_COMPONENTS: FocusCaseDirective[] = [
  {value: 1, el: {nativeElement: {focus: jasmine.createSpy('focus1')}}},
  {value: 2, el: {nativeElement: {focus: jasmine.createSpy('focus2')}}},
  {value: 3, el: {nativeElement: {focus: jasmine.createSpy('focus3')}}},
  {value: 3, el: {nativeElement: {focus: jasmine.createSpy('focus4')}}},
];

describe('FocusSwitchDirective', () => {
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

  it('should match case with value 2', (done) => {
    const directive = new FocusSwitchDirective();
    directive.cases = MOCK_CASE_COMPONENTS;
    directive.value = 2;
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
});
