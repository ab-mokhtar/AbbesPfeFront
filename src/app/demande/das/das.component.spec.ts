import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DASComponent } from './das.component';

describe('DASComponent', () => {
  let component: DASComponent;
  let fixture: ComponentFixture<DASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DASComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
