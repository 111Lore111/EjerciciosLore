import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaFotosComponent } from './componentes/galeria-fotos/galeria-fotos.component';
import { TablaUsuariosComponent } from './componentes/tabla-usuarios/tabla-usuarios.component';
import { ObtenerGaleriaService } from './servicios/obtener-galeria.service';
import { ObtenerTablaService } from './servicios/obtener-tabla.service';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaFotosComponent,
    TablaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [

    ObtenerGaleriaService,
    ObtenerTablaService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
