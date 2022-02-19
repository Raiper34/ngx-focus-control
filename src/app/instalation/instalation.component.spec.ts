import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalationComponent } from './instalation.component';

describe('InstalationComponent', () => {
  let component: InstalationComponent;
  let fixture: ComponentFixture<InstalationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
