import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChargeComponent } from './update-charge.component';

describe('UpdateChargeComponent', () => {
  let component: UpdateChargeComponent;
  let fixture: ComponentFixture<UpdateChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
