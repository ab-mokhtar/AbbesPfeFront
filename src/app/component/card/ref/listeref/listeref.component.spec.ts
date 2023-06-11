import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerefComponent } from './listeref.component';

describe('ListerefComponent', () => {
  let component: ListerefComponent;
  let fixture: ComponentFixture<ListerefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
