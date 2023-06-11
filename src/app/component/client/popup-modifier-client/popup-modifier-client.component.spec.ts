import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupModifierClientComponent } from './popup-modifier-client.component';

describe('PopupModifierClientComponent', () => {
  let component: PopupModifierClientComponent;
  let fixture: ComponentFixture<PopupModifierClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupModifierClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupModifierClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
