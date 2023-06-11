import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreDComponent } from './autre-d.component';

describe('AutreDComponent', () => {
  let component: AutreDComponent;
  let fixture: ComponentFixture<AutreDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutreDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutreDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
