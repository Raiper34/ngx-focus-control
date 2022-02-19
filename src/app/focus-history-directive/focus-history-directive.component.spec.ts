import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusHistoryDirectiveComponent } from './focus-history-directive.component';

describe('FocusHistoryDirectiveComponent', () => {
  let component: FocusHistoryDirectiveComponent;
  let fixture: ComponentFixture<FocusHistoryDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusHistoryDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusHistoryDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
