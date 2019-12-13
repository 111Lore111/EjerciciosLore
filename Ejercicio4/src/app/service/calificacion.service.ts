import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calificacion } from '../model/calificacion';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  private calificacionUrl = 'api/calificacion';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Calificacion[]>{
    return this.http.get<Calificacion[]>(this.calificacionUrl).pipe();
  }

  getByAlumnoId(alumnoId: number): Observable<Calificacion>{
    return this.http.get<Calificacion>(this.calificacionUrl,{
      params: new HttpParams()
      .set('alumnoId', alumnoId.toString())
    });
  }
}
