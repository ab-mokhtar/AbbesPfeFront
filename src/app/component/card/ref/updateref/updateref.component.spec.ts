import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterefComponent } from './updateref.component';

describe('UpdaterefComponent', () => {
  let component: UpdaterefComponent;
  let fixture: ComponentFixture<UpdaterefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaterefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdaterefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
