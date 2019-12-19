import { TestBed } from '@angular/core/testing';

import { ApiVotosService } from './api-votos.service';

describe('ApiVotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiVotosService = TestBed.get(ApiVotosService);
    expect(service).toBeTruthy();
  });
});
