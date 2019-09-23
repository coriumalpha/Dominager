import { TestBed } from '@angular/core/testing';

import { DrivesService } from './drives.service';

describe('DrivesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrivesService = TestBed.get(DrivesService);
    expect(service).toBeTruthy();
  });
});
