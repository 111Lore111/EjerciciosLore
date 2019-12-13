import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AutorizacionGuard as AuthGuard } from './guard/autorizacion.guard';
import { RegistroComponent } from './component/registro/registro.component';
import { GuardarAlumnoComponent } from './component/guardar-alumno/guardar-alumno.component';

const routes: Routes = [
{path: '',
component: LoginComponent},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'home',
  canActivate: [AuthGuard],
  component: HomeComponent
},
{
  path: 'registro',
  component: RegistroComponent
},
{
  path: 'guardarAlumno',
  component: GuardarAlumnoComponent
},
{
  //si ninguna opcion no existe, no lo manda a nunguna parte
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
