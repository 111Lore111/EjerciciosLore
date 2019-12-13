import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlumnoService } from './alumno.service';

describe('AlumnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AlumnoService = TestBed.get(AlumnoService);
    expect(service).toBeTruthy();
  });
});
