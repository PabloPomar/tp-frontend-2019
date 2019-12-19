import { TestBed } from '@angular/core/testing';

import { ApiAgregarUserDescriptionService } from './api-agregar-user-description.service';

describe('ApiAgregarUserDescriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiAgregarUserDescriptionService = TestBed.get(ApiAgregarUserDescriptionService);
    expect(service).toBeTruthy();
  });
});
