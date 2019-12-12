import { TestBed } from '@angular/core/testing';

import { ObtenerGaleriaService } from './obtener-galeria.service';

describe('ObtenerGaleriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerGaleriaService = TestBed.get(ObtenerGaleriaService);
    expect(service).toBeTruthy();
  });
});
