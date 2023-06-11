import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedatesComponent } from './listedates.component';

describe('ListedatesComponent', () => {
  let component: ListedatesComponent;
  let fixture: ComponentFixture<ListedatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListedatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
