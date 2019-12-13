import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CalificacionService } from 'src/app/service/calificacion.service';
import { Calificacion } from 'src/app/model/calificacion';


@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit {

  dataSource: Calificacion;
  displayedColumns: string[] = ['id','curso','nota1','nota2','nota3','promedio'];
  
  @Input() message: string;
  @Input() alumnoId: number;
  @Input() alumnoName: string;
  @Output() response: EventEmitter<string> = new EventEmitter<string>();

  constructor(private calificacionServe: CalificacionService) { }
  
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges){
    // console.log('changes', changes.message);

    if(changes.alumnoId.currentValue){
      this.getCalificacionAlumnoId(changes.alumnoId.currentValue);
    }
  }

  sendMessaje(){
    this.response.emit('Soy tu hijo');
  }

  getCalificacionAlumnoId(alumnoId: number){
    this.calificacionServe.getByAlumnoId(alumnoId).subscribe(
      data =>{
        this.dataSource = data;
      },
      error =>{
        console.log('error',error);
      }
    );
  }
}
