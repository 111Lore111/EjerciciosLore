import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AutorizacionService } from '../service/autorizacion.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionGuard implements CanActivate {

  constructor(
    private router: Router,
    private authentificationServe: AutorizacionService
  ){}

  canActivate(
    router: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      const currentUser = this.authentificationServe.currentUserValue;

      if(currentUser){
        console.log('usuario autorizado');
        return true;
      }
      console.log("Usuario no autorizado");
      this.router.navigate(['/login']);
      return false;
  }
}
