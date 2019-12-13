import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/model/alumno';
import { AlumnoService } from 'src/app/service/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  messageValue = '';
  dataSource: Alumno[];
  displayedColumns: string[] = ['id','name','actions'];
  alumnoId: number;
  alumnoName: string;
  fetchId = 1;

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit() {
    this.messageValue = 'Soy tu padre';
    this.getAlumno();
  }

  printMessage(event: string){
    console.log(event);
  }

  getAlumno(){
    this.alumnoService.getAll().subscribe(
      data =>{
        this.dataSource = data;
      },
      error =>{
        console.log('error', error);
      }
    );
  }

  setAlumno(event: Alumno){
    this.alumnoId = event.id;
    this.alumnoName = event.name;
  }

  getIdAlumno(){
  }
}
