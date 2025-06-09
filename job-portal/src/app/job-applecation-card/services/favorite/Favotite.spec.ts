import { TestBed } from '@angular/core/testing';

import { FavaroteJobService } from './FavoriteJobService';

describe('JobDataService', () => {
  let service: FavaroteJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavaroteJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
