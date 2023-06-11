import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvdetailComponent } from './lvdetail.component';

describe('LvdetailComponent', () => {
  let component: LvdetailComponent;
  let fixture: ComponentFixture<LvdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LvdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
