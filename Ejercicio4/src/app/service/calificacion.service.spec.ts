import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CalificacionService } from './calificacion.service';

describe('CalificacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: CalificacionService = TestBed.get(CalificacionService);
    expect(service).toBeTruthy();
  });
});
