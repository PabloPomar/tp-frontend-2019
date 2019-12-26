import { TestBed } from '@angular/core/testing';

import { ApiLoginService } from './api-login.service';
import {HttpClientModule} from '@angular/common/http';

describe('ApiLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ApiLoginService = TestBed.get(ApiLoginService);
    expect(service).toBeTruthy();
  });
});
