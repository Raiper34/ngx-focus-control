import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusParentDirectiveComponent } from './focus-parent-directive.component';

describe('FocusParentDirectiveComponent', () => {
  let component: FocusParentDirectiveComponent;
  let fixture: ComponentFixture<FocusParentDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusParentDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusParentDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
