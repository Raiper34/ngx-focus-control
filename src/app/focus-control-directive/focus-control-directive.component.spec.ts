import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusControlDirectiveComponent } from './focus-control-directive.component';

describe('FocusControlDirectiveComponent', () => {
  let component: FocusControlDirectiveComponent;
  let fixture: ComponentFixture<FocusControlDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusControlDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusControlDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
