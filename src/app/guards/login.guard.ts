import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private _data: DataService, public router: Router) {

  }
  canActivate(): boolean {
    if(!this._data.isLogged){
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
