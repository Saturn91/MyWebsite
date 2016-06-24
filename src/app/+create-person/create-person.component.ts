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
  private genders: Array<string> = ['M', 'F'];
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
    if(value.idControl > 0 && value.firstNameControl != '' && value.lastNameControl != ''){
      if(value.gender == 'M' || value.gender == 'F' ){
        console.log('id: ' + value.idControl + ' name: ' + value.firstNameControl + " " + value.lastNameControl + " gender: " + value.gender);
      }else{
        console.log(value.gender + ": wrong Argument! Must be F or M" )
      }
    }else{
      console.log(" all Fields must be filled!" )
    }

  }

  ngOnInit() {
  }

}
