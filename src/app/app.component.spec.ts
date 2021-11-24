import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FocusHistoryService} from 'ngx-focus-control';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [FocusHistoryService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
