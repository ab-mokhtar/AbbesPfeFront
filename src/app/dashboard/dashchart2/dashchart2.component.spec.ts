import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashchart2Component } from './dashchart2.component';

describe('Dashchart2Component', () => {
  let component: Dashchart2Component;
  let fixture: ComponentFixture<Dashchart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dashchart2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashchart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
