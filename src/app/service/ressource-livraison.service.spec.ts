import { TestBed } from '@angular/core/testing';

import { RessourceLivraisonService } from './ressource-livraison.service';

describe('RessourceLivraisonService', () => {
  let service: RessourceLivraisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RessourceLivraisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
