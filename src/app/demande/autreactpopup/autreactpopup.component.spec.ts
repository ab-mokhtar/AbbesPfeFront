import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreactpopupComponent } from './autreactpopup.component';

describe('AutreactpopupComponent', () => {
  let component: AutreactpopupComponent;
  let fixture: ComponentFixture<AutreactpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutreactpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutreactpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
