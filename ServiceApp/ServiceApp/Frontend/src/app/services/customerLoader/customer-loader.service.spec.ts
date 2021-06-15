import { TestBed } from '@angular/core/testing';

import { CustomerLoaderService } from './customer-loader.service';

describe('CustomerLoaderService', () => {
  let service: CustomerLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
