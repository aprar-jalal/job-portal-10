import { TestBed } from '@angular/core/testing';

import { JobSeekerApiService } from './job-seeker-api.service';

describe('JobSeekerApiService', () => {
  let service: JobSeekerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobSeekerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
