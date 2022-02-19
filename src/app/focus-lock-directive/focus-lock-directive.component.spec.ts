import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusLockDirectiveComponent } from './focus-lock-directive.component';

describe('FocusLockDirectiveComponent', () => {
  let component: FocusLockDirectiveComponent;
  let fixture: ComponentFixture<FocusLockDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusLockDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusLockDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
