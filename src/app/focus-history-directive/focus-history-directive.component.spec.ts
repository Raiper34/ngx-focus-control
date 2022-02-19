import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusHistoryDirectiveComponent } from './focus-history-directive.component';
import {FocusHistoryService} from 'ngx-focus-control';

describe('FocusHistoryDirectiveComponent', () => {
  let component: FocusHistoryDirectiveComponent;
  let fixture: ComponentFixture<FocusHistoryDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusHistoryDirectiveComponent ],
      providers: [FocusHistoryService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusHistoryDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
