import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from './services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginGuard } from './guards/login.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoading = false;
  isLogged = false;
  constructor(private _dataService: DataService, private _snackBar: MatSnackBar, private router: Router){
    this.isLogged = this._dataService.isLogged;
    this._dataService
        .getIsLoadingEvent()
        .subscribe(isLoad => this.isLoading = isLoad);
    this._dataService
        .getIsLogged()
        .subscribe(isLogged => this.isLogged = isLogged);
    this._dataService
        .getGeneralNotificationMessage()
        .subscribe(msg => {
          this._snackBar.open(msg, 'Ok', {
            duration: 2000
          });
        });
  }

  logout() {
    console.log('out');
    this.router.navigateByUrl('/');
    this._dataService.setIsLogged(false);
  }
}

export const routes: Routes = [
  { 
    path: '', 
    component: MainComponent 
  },
  { 
    path: 'about', 
    component: AboutComponent,
    canActivate: [LoginGuard]
  },
  { 
    path: 'contact', 
    component: ContactComponent,
    canActivate: [LoginGuard]
  },
  { path: '**', redirectTo: '' }
];
