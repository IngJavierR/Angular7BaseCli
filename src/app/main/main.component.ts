import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ConsumeService } from '../services/consume.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router,
    private _dataService: DataService,
    private _consumeService: ConsumeService) { }
  loginForm = this.fb.group({
    userName: ['admin', Validators.required],
    password: ['admin', Validators.required]
  });

  ngOnInit() {
  }

  submit() {
    this._dataService.setIsLoadingEvent(true);
    this._consumeService.login(this.loginForm.value.userName, this.loginForm.value.password)
      .subscribe(res => {
        this._dataService.setIsLoadingEvent(false);
        this._dataService.setToken(res.token);
        this._dataService.setIsLogged(true);
        this.router.navigate(['about']);
      }, err => {
        this._dataService.setIsLoadingEvent(false);
        this._dataService.setGeneralNotificationMessage('Login incorrecto');
      });
  }
}
