import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintpopupComponent } from './maintpopup.component';

describe('MaintpopupComponent', () => {
  let component: MaintpopupComponent;
  let fixture: ComponentFixture<MaintpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
