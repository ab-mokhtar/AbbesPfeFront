import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprioriteComponent } from './updatepriorite.component';

describe('UpdateprioriteComponent', () => {
  let component: UpdateprioriteComponent;
  let fixture: ComponentFixture<UpdateprioriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprioriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateprioriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
