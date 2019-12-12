import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObtenerGaleriaService {
  ObtenerUrl: string;


  constructor( private http: HttpClient) { 
    this.ObtenerUrl = environment.urlgaleria;
  }

  obtenerGaleria(){
    return this.http.get(this.ObtenerUrl);
  }
}
