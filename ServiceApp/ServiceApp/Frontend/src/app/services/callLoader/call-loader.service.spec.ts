import { TestBed } from '@angular/core/testing';

import { CallLoaderService } from './call-loader.service';

describe('CallLoaderService', () => {
  let service: CallLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
