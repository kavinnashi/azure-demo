import { TestBed } from '@angular/core/testing';

import { AddToHomeScreenServiceService } from './add-to-home-screen-service.service';

describe('AddToHomeScreenServiceService', () => {
  let service: AddToHomeScreenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToHomeScreenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
