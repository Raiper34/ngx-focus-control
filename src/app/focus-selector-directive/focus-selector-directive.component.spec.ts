import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusSelectorDirectiveComponent } from './focus-selector-directive.component';

describe('FocusSelectorDirectiveComponent', () => {
  let component: FocusSelectorDirectiveComponent;
  let fixture: ComponentFixture<FocusSelectorDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusSelectorDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusSelectorDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
