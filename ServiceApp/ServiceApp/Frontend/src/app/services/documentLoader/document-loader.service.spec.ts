import { TestBed } from '@angular/core/testing';

import { DocumentLoaderService } from './document-loader.service';

describe('DocumentLoaderService', () => {
  let service: DocumentLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
