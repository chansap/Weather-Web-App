import { TestBed } from '@angular/core/testing';

import { PassingDataServService } from './passing-data-serv.service';

describe('PassingDataServService', () => {
  let service: PassingDataServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassingDataServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
