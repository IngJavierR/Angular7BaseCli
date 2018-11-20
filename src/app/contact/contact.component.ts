import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formInfo: FormArray;
  constructor(private fb: FormBuilder) { }
  
  profileForm = this.fb.group({
    formInfoGroups : this.fb.array([])
  });

  get formInfoGroups() {
    return <FormArray>this.profileForm.get('formInfoGroups');
  }

  ngOnInit() {
    this.agregar();
  }

  submit() {
    this.formInfoGroups.controls.forEach(x => console.log(x.value));
  } 

  agregar() {
    this.formInfoGroups.push(this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required]
      })
    }));
  }

}
