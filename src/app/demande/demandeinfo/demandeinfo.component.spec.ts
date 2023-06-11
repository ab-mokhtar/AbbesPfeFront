import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeinfoComponent } from './demandeinfo.component';

describe('DemandeinfoComponent', () => {
  let component: DemandeinfoComponent;
  let fixture: ComponentFixture<DemandeinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
