import { Calificacion } from './calificacion';

describe('Calificacion', () => {
  it('should create an instance', () => {
    expect(new Calificacion(1,'Matematica',23,44,55,40)).toBeTruthy();
  });
});
