import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  constructor(private fb: FormBuilder, 
              private router: Router, 
              private _dataService: DataService) { }
  loginForm = this.fb.group({
    userName: ['admin', Validators.required],
    password: ['admin', Validators.required]
  });

  ngOnInit() {
  }

  submit() {
    if(this.loginForm.value.userName === 'admin' && this.loginForm.value.userName === 'admin'){
      this._dataService.setIsLogged(true);
      this.router.navigate(['about']);
    }
  }

}
