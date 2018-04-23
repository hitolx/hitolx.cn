import { TestBed, inject } from '@angular/core/testing';

import { CommunalService } from './communal.service';

describe('CommunalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommunalService]
    });
  });

  it('should be created', inject([CommunalService], (service: CommunalService) => {
    expect(service).toBeTruthy();
  }));
});
