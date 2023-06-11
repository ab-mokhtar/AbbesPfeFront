import { TestBed } from '@angular/core/testing';

import { AutresActivitesService } from './autres-activites.service';

describe('AutresActivitesService', () => {
  let service: AutresActivitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutresActivitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
