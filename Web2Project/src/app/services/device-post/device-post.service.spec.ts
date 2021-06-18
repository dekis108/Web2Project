import { TestBed } from '@angular/core/testing';

import { DevicePostService } from './device-post.service';

describe('DevicePostService', () => {
  let service: DevicePostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicePostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
