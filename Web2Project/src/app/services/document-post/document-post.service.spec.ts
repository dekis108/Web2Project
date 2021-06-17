import { TestBed } from '@angular/core/testing';

import { DocumentPostService } from './document-post.service';

describe('DocumentPostService', () => {
  let service: DocumentPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
