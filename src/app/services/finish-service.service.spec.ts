import { TestBed } from '@angular/core/testing';

import { FinishServiceService } from './finish-service.service';

describe('FinishServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinishServiceService = TestBed.get(FinishServiceService);
    expect(service).toBeTruthy();
  });
});
