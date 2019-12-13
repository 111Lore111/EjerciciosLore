import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/models';
import { UserService } from 'src/app/service/user.service';
import { AnimalService } from 'src/app/service/animal.service';
import { Animal } from 'src/app/model/animal';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formG: FormGroup;
  user: User = new User();
  animalList: Animal[];
  //difine una lista y esta crea una arreglo donde llamara a 
  //a la clase animal y creara el objeto

  constructor(
    private formB: FormBuilder,
    private userService: UserService,
    private animalservece: AnimalService) { }

  //se creara formulario con los controles
  ngOnInit() {
    
    this.buildForm();
    this.getAnimal();
  }

  //metodo para la creacion de los controles
  buildForm(){
    //se crea objeto de formgrup con controles
    this.formG = this.formB.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      username: [null, Validators.required],
      pws: [null, Validators.required],
      animal: null
    });
  }

  saveUser(){ //muestra los datos
    // //la subcripcion del servicio tiene 3 datos = (data,error,completo--termino)
    this.user.name = this.formG.get('name').value;
    this.user.lastname = this.formG.get('lastname').value;
    this.user.username = this.formG.get('username').value;
    this.user.pws = this.formG.get('pws').value;
    this.user.animalId = this.formG.get('animal').value;
  
    this.userService.save(this.user).subscribe(
      //cuando ya esta subcrito consultara dato y mostrara
      data => {
        console.log('Se ha guardado usuario',data);
        alert('Usuario guardado con exito');

      
      },
      //cuando haya un error lo mostrara
      error =>{
        console.log('error al guardar usuario',error);
      }
    );
  }

  getAnimal(){
    this.animalservece.getAll().subscribe(
      data =>{
        this.animalList = data;
        console.log('Hola', data);
      },
      error =>{
        console.log('Error get animal', error);
      }
    );
  }
}
