import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandenavComponent } from './demandenav.component';

describe('DemandenavComponent', () => {
  let component: DemandenavComponent;
  let fixture: ComponentFixture<DemandenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
