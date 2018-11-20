import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild('formContainer') formContainer;
  @Input('form-info') formInfo: FormArray;
  @Input('form-group') formGroup;
  cities: any[] = [{
    id: 1,
    name: 'CDMX',
  },{
    id: 2,
    name: 'EDOMEX',
  }];
  constructor() { }

  ngOnInit() {

  }

}