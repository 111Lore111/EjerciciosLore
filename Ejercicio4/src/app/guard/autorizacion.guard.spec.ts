import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AutorizacionGuard } from './autorizacion.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AutorizacionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [AutorizacionGuard]
    });
  });

  it('should ...', inject([AutorizacionGuard], (guard: AutorizacionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
