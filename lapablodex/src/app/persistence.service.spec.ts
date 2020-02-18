import { TestBed } from '@angular/core/testing';

import {PersistencesService} from "./persistences.service";

describe('PersistencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersistencesService = TestBed.get(PersistencesService);
    expect(service).toBeTruthy();
  });
});
