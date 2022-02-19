import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusIfDirectiveComponent } from './focus-if-directive.component';

describe('FocusIfDirectiveComponent', () => {
  let component: FocusIfDirectiveComponent;
  let fixture: ComponentFixture<FocusIfDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusIfDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusIfDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
