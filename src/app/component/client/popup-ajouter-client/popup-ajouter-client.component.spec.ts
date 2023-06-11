import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAjouterClientComponent } from './popup-ajouter-client.component';

describe('PopupAjouterClientComponent', () => {
  let component: PopupAjouterClientComponent;
  let fixture: ComponentFixture<PopupAjouterClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAjouterClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAjouterClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
