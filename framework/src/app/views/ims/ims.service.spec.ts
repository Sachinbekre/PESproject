import { TestBed } from '@angular/core/testing';

import { ImsService } from './ims.service';

describe('ImsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImsService = TestBed.get(ImsService);
    expect(service).toBeTruthy();
  });
});
