import { TestBed } from '@angular/core/testing';

import { PtslpaService } from './ptslpa.service';

describe('PtslpaService', () => {
  let service: PtslpaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PtslpaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
