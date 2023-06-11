import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCalendarComponent } from './popup-calendar.component';

describe('PopupCalendarComponent', () => {
  let component: PopupCalendarComponent;
  let fixture: ComponentFixture<PopupCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
