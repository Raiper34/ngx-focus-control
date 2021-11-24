import { TestBed } from '@angular/core/testing';

import { FocusHistoryService } from './focus-history.service';
import createSpy = jasmine.createSpy;

describe('FocusHistoryService', () => {
  let service: FocusHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [FocusHistoryService]});
    service = TestBed.inject(FocusHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be push element into history', () => {
    expect(service.getHistory()).toEqual([]);
    service.pushElement({id: 'el1'} as HTMLElement);
    expect(service.getHistory()).toEqual([{id: 'el1'}] as HTMLElement[]);
    service.pushElement({id: 'el2'} as HTMLElement);
    expect(service.getHistory()).toEqual([{id: 'el1'}, {id: 'el2'}] as HTMLElement[]);
  });

  it('should remove element from history', () => {
    service.pushElement({id: 'el1'} as HTMLElement);
    service.pushElement({id: 'el2'} as HTMLElement);
    expect(service.getHistory()).toEqual([{id: 'el1'}, {id: 'el2'}] as HTMLElement[]);
    service.popElement();
    expect(service.getHistory()).toEqual([{id: 'el1'}] as HTMLElement[]);
  });

  it('should get last element from history', () => {
    service.pushElement({id: 'el1'} as HTMLElement);
    service.pushElement({id: 'el2'} as HTMLElement);
    expect(service.getLastElement()).toEqual({id: 'el2'} as HTMLElement);
  });

  it('should go to previous from history', () => {
    service.pushElement({id: 'el1'} as HTMLElement);
    const element = {id: 'el2', focus: () => null};
    service.pushElement(element as HTMLElement);
    service.pushElement({id: 'el2'} as HTMLElement);
    spyOn(element, 'focus');
    service.focusPrevious();
    expect(element.focus).toHaveBeenCalled();
    expect(service.getHistory()).toEqual([{id: 'el1'}] as HTMLElement[]);
  });
});
