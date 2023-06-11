import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedatesComponent } from './updatedates.component';

describe('UpdatedatesComponent', () => {
  let component: UpdatedatesComponent;
  let fixture: ComponentFixture<UpdatedatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
