import { TestBed } from '@angular/core/testing';

import { ApiVotosService } from './api-votos.service';
import {HttpClientModule} from '@angular/common/http';

describe('ApiVotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ApiVotosService = TestBed.get(ApiVotosService);
    expect(service).toBeTruthy();
  });
});
