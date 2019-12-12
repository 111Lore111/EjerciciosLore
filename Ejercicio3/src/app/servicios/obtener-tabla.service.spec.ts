import { TestBed } from '@angular/core/testing';

import { ObtenerTablaService } from './obtener-tabla.service';

describe('ObtenerTablaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerTablaService = TestBed.get(ObtenerTablaService);
    expect(service).toBeTruthy();
  });
});
