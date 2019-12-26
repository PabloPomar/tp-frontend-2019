import { TestBed } from '@angular/core/testing';

import { ApiAgregarUserDescriptionService } from './api-agregar-user-description.service';
import {HttpClientModule} from '@angular/common/http';

describe('ApiAgregarUserDescriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ApiAgregarUserDescriptionService = TestBed.get(ApiAgregarUserDescriptionService);
    expect(service).toBeTruthy();
  });
});
