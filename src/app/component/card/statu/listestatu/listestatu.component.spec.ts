import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListestatuComponent } from './listestatu.component';

describe('ListestatuComponent', () => {
  let component: ListestatuComponent;
  let fixture: ComponentFixture<ListestatuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListestatuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListestatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
