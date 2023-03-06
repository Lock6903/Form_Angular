import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { min } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent{
   value = 0; 
  increaseValue(){
    console.log("calbvo")
       this.value=this.value+15;
       console.log(this.value)
    
  }
  name:FormControl = new FormControl('', Validators.required);
  surname:FormControl = new FormControl('', Validators.required);
  surname2:FormControl = new FormControl('', Validators.required);
  phone:FormControl = new FormControl('', [Validators.minLength(9), Validators.maxLength(12)]);
  email:FormControl = new FormControl('', Validators.email);
  gender: FormControl = new FormControl('', Validators.required);//gender custom
  birthday:FormControl = new FormControl('', Validators.required);
  experience:FormControl = new FormControl('', Validators.required);
  work:FormControl = new FormControl('', Validators.required);
  robot: FormControl = new FormControl('', Validators.required);
  privateP: FormControl = new FormControl('', Validators.required);//politicas d privacidad

  firstFormGroup:FormGroup = new FormGroup({
    name:this.name,
    surname:this.surname,
    phone:this.phone,
    email:this.email,
    gender:this.gender,
    birthday:this.birthday,
    
    robot:this.robot,
    privateP:this.privateP
  });
  secondFormGroup:FormGroup = new FormGroup({
    experience: this.experience,
    work:this.work,
  });
  thirdFormGroup:FormGroup = new FormGroup({})
  constructor(){}
}

