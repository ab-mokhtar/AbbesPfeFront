import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestatuComponent } from './updatestatu.component';

describe('UpdatestatuComponent', () => {
  let component: UpdatestatuComponent;
  let fixture: ComponentFixture<UpdatestatuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestatuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatestatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
