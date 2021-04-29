import { TestBed } from '@angular/core/testing';

import { IncidentLoaderService } from './incident-loader.service';

describe('IncidentLoaderService', () => {
  let service: IncidentLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
