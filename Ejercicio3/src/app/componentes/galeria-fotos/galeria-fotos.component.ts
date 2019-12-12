import { Component, OnInit } from '@angular/core';
import { ObtenerGaleriaService } from 'src/app/servicios/obtener-galeria.service';

@Component({
  selector: 'app-galeria-fotos',
  templateUrl: './galeria-fotos.component.html',
  styleUrls: ['./galeria-fotos.component.css']
})
export class GaleriaFotosComponent implements OnInit {

  detallePersonal;

  constructor(public servicio: ObtenerGaleriaService) { }

  ngOnInit() {
    const response = this.servicio.obtenerGaleria().subscribe(
      (data) =>{
        console.log(data);
        this.detallePersonal = data;
      }
    );
  }
}
