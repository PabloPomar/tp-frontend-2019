import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { ApiConnectionService } from './api-connection.service';

describe('ApiConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ApiConnectionService = TestBed.get(ApiConnectionService);
    expect(service).toBeTruthy();
  });
});
