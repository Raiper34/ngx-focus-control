import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusGroupDirectiveComponent } from './focus-group-directive.component';

describe('FocusGroupDirectiveComponent', () => {
  let component: FocusGroupDirectiveComponent;
  let fixture: ComponentFixture<FocusGroupDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusGroupDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusGroupDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
