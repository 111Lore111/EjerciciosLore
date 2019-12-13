import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {
  private userUrl = 'api/user';
  private currentUserSubject = new BehaviorSubject<User>(null);
  public currentUser: Observable<User>;

  constructor( private http: HttpClient) { }

  public get currentUserValue(): User{
    return this.currentUserSubject.value;
  }

  login(username: string, pws: string):Observable<User>{
  return this.http.get<User[]>(this.userUrl)
      .pipe(map(user =>{
        const userAux = user.find(n => n.username == username && n.pws == pws);
        if (userAux)
        {
          this.currentUserSubject.next(userAux);
        }
        return userAux;
      })
    );
    }
    logout()
    {
       localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
   }
  
}
