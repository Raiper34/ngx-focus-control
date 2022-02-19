import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusAutoDirectiveComponent } from './focus-auto-directive.component';

describe('FocusAutoDirectiveComponent', () => {
  let component: FocusAutoDirectiveComponent;
  let fixture: ComponentFixture<FocusAutoDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusAutoDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusAutoDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
