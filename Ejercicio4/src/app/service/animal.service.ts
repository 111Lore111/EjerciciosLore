import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../model/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animalUrl = 'api/animal';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.animalUrl).pipe();
  }
}
