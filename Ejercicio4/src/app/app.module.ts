import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mocks/in-memory-data-service';
import { HttpClientModule } from '@angular/common/http';
import { TablaComponent } from './component/tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './component/home/home.component';
import { RegistroComponent } from './component/registro/registro.component';
import { MatSelectModule } from '@angular/material/select';
import { DirectivasDirective } from './directivas.directive';
import { OnlyCharDirective } from './directivas/only-char.directive';
import { AlumnoComponent } from './component/alumno/alumno.component';
import { CalificacionComponent } from './component/calificacion/calificacion.component';
import { GuardarAlumnoComponent } from './component/guardar-alumno/guardar-alumno.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TablaComponent,
    HomeComponent,
    RegistroComponent,
    DirectivasDirective,
    OnlyCharDirective,
    AlumnoComponent,
    CalificacionComponent,
    GuardarAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService),
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
