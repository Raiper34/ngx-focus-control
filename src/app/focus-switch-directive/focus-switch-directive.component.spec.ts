import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusSwitchDirectiveComponent } from './focus-switch-directive.component';

describe('FocusSwitchDirectiveComponent', () => {
  let component: FocusSwitchDirectiveComponent;
  let fixture: ComponentFixture<FocusSwitchDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusSwitchDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusSwitchDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
