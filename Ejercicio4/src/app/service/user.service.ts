import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './../model/models'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //declaracion de url falsa
private userUrl = 'api/user';

  constructor(
    private http: HttpClient
  ) {}

    //metodo que devolvera un observable de tipo user, esto recorrera las filas y traera el dato
  getUser(): Observable<User[]>{
      return this.http.get<User[]>(this.userUrl).pipe();
   }

   save(user: User){
     console.log('Usuario a guardar', user)
     return this.http.post<User>(this.userUrl, user).pipe();
   }
}
