import {FocusSwitchDirective} from './focus-switch.directive';
import {FocusCaseDirective} from './focus-case.directive';

const MOCK_CASE_COMPONENTS: FocusCaseDirective[] = [
  {value: 1, el: {nativeElement: {focus: jasmine.createSpy()}}},
  {value: 2, el: {nativeElement: {focus: jasmine.createSpy()}}},
  {value: 3, el: {nativeElement: {focus: jasmine.createSpy()}}},
  {value: 3, el: {nativeElement: {focus: jasmine.createSpy()}}},
];

describe('FocusSwitchDirective', () => {
  it('should create an instance', () => {
    const directive = new FocusSwitchDirective();
    expect(directive).toBeTruthy();
  });

  it('should match case with value 1', () => {
    const directive = new FocusSwitchDirective();
    directive.cases = MOCK_CASE_COMPONENTS;
    directive.value = 1;
    expect(MOCK_CASE_COMPONENTS[0].el.nativeElement.focus).toHaveBeenCalled();
  });

  it('should match case with value 2', () => {
    const directive = new FocusSwitchDirective();
    directive.cases = MOCK_CASE_COMPONENTS;
    directive.value = 2;
    expect(MOCK_CASE_COMPONENTS[1].el.nativeElement.focus).toHaveBeenCalled();
  });

  it('should match case first occurrence', () => {
    const directive = new FocusSwitchDirective();
    directive.cases = MOCK_CASE_COMPONENTS;
    directive.value = 3;
    expect(MOCK_CASE_COMPONENTS[2].el.nativeElement.focus).toHaveBeenCalled();
    expect(MOCK_CASE_COMPONENTS[3].el.nativeElement.focus).not.toHaveBeenCalled();
  });

  it('should match ngAfterContentInit', () => {
    const directive = new FocusSwitchDirective();
    // first pass value, then cases
    directive.value = 1;
    directive.cases = MOCK_CASE_COMPONENTS;
    expect(MOCK_CASE_COMPONENTS[0].el.nativeElement.focus).not.toHaveBeenCalled();
    directive.ngAfterContentInit();
    expect(MOCK_CASE_COMPONENTS[0].el.nativeElement.focus).toHaveBeenCalled();
  });
});
