import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AutorizacionService } from './autorizacion.service';

describe('AutorizacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AutorizacionService = TestBed.get(AutorizacionService);
    expect(service).toBeTruthy();
  });
});
