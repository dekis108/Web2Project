import { TestBed } from '@angular/core/testing';

import { DevicesLoaderService } from './devices-loader.service';

describe('DevicesLoaderService', () => {
  let service: DevicesLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicesLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
