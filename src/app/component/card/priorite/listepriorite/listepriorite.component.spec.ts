import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeprioriteComponent } from './listepriorite.component';

describe('ListeprioriteComponent', () => {
  let component: ListeprioriteComponent;
  let fixture: ComponentFixture<ListeprioriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeprioriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeprioriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
