import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaFotosComponent } from './componentes/galeria-fotos/galeria-fotos.component';
import { TablaUsuariosComponent } from './componentes/tabla-usuarios/tabla-usuarios.component';


const routes: Routes = [
  {
    path: 'galeria',
    component: GaleriaFotosComponent
  },
  {
    path: 'tabla',
    component: TablaUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
