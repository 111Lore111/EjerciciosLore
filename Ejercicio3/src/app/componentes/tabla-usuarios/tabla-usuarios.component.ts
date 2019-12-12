import { Component, OnInit } from '@angular/core';
import { ObtenerTablaService } from 'src/app/servicios/obtener-tabla.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  detallePersonal;

  constructor(public servicio: ObtenerTablaService) {}

  ngOnInit() {
    const response = this.servicio.obtenerTabla().subscribe(
      (data) =>{
        console.log(data);
        this.detallePersonal = data;
      }
    );
  }
}
