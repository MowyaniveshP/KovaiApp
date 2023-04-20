import { TestBed } from '@angular/core/testing';

import { CollectDisplayService } from './collect-display.service';

describe('CollectDisplayService', () => {
  let service: CollectDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
