import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusUnleavableDirectiveComponent } from './focus-unleavable-directive.component';

describe('FocusUnleavableDirectiveComponent', () => {
  let component: FocusUnleavableDirectiveComponent;
  let fixture: ComponentFixture<FocusUnleavableDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusUnleavableDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusUnleavableDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
