import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { User } from 'src/app/model/models';
import { UserService } from 'src/app/service/user.service';
import { AutorizacionService } from 'src/app/service/autorizacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //objeto tipo user
  user: User = new User();
  isLogin = false;

  constructor(
    //importa el servicio de la carpeta servicios
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authentificationService: AutorizacionService
  ) {}

  ngOnInit() {
  }

  setUser(){
    console.log('user', this.user);
  }

  //Un observable define la conexion de un servicio 
  //metodo
  getUser(){ //muestra los datos
    //la subcripcion del servicio tiene 3 datos = (data,error,completo--termino)
    this.userService.getUser().subscribe(
      //cuando ya esta subcrito consultara dato y mostrara
      (data) => {
        console.log('data',data);

        if(data.find(n => n.name === this.user.name && n.pws == this.user.pws)){//=== valor y tipo
          this.isLogin = true;
        }else{
          this.isLogin = false;
        }
        console.log('isLogin: ', this.isLogin);
      },
      //cuando haya un error lo mostrara
      (error) =>{
        console.log('error',error);
      }
    );
  }

  onSubmit(){
    this.authentificationService.login(this.user.username, this.user.pws)
    .pipe(first())
    .subscribe(
      data =>{
        if(data){
          localStorage.setItem('username', data.name + ' ' + data.lastname);
        }
        this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
      },
      error =>{
        console.log('error', error);
      }
    );
  }
}
