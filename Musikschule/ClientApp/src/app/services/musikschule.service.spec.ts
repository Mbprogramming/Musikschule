import { TestBed } from '@angular/core/testing';

import { MusikschuleService } from './musikschule.service';

describe('MusikschuleService', () => {
  let service: MusikschuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusikschuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
