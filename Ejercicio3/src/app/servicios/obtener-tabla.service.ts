import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObtenerTablaService {
  ObtenerUrl: string;

  constructor(private http: HttpClient) { 
    this.ObtenerUrl = environment.urltabla;
  }

  obtenerTabla(){
    return this.http.get(this.ObtenerUrl);
  }
}
