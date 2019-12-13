import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../model/alumno';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumnoUrl = 'api/alumno';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.alumnoUrl).pipe();
  }

  getIdAlumno(id:number):Observable<Alumno[]>{
      return this.http.get<Alumno[]>(this.alumnoUrl).pipe();
  }
}
