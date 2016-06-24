import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, ControlGroup} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-create-person',
  templateUrl: 'create-person.component.html',
  styleUrls: ['create-person.component.css']
})
export class CreatePersonComponent implements OnInit {
  private form: ControlGroup;
  private createdPatient: string;
  private genders: Array<string> = ['MALE', 'FEMALE'];
  private currentGender: string = this.genders[0];
  private fb: FormBuilder = new FormBuilder();
  constructor(){
    this.form = this.fb.group({
      'idControl': [''],
      'firstNameControl': ['', Validators.required],
      'lastNameControl': ['', Validators.required],
      'gender': [this.currentGender, Validators.required]
    })
  }

  confirm(value: any){
    console.log('id:' + value.idControl + ' name: ' + value.firstNameControl + " " + value.lastNameControl + " gender: " + value.gender);
  }

  ngOnInit() {
  }

}
