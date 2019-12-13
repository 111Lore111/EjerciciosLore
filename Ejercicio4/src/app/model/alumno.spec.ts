import { Alumno } from './alumno';
import { ComponentFixture } from '@angular/core/testing';

describe('Alumno', () => {
  it('should create an instance', () => {
    expect(new Alumno('mono')).toBeTruthy();
  });
});
