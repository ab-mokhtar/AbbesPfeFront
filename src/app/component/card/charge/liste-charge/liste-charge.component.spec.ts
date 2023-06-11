import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChargeComponent } from './liste-charge.component';

describe('ListeChargeComponent', () => {
  let component: ListeChargeComponent;
  let fixture: ComponentFixture<ListeChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeChargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
