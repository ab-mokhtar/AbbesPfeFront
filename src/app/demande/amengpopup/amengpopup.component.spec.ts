import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmengpopupComponent } from './amengpopup.component';

describe('AmengpopupComponent', () => {
  let component: AmengpopupComponent;
  let fixture: ComponentFixture<AmengpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmengpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmengpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
