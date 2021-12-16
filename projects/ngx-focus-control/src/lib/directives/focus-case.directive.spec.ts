import { FocusCaseDirective } from './focus-case.directive';

describe('FocusCaseDirective', () => {
  it('should create an instance', () => {
    const directive = new FocusCaseDirective(null);
    expect(directive).toBeTruthy();
  });

  it('should fill directive input', () => {
    const directive = new FocusCaseDirective(null);
    directive.value = 10;
    expect(directive.value).toBe(10);
  });
});
