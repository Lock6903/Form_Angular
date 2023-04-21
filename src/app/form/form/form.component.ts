import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userService } from 'src/app/servicios/userServices';
import { User } from "../../servicios/userInterface";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  value = 0;
  increaseValue1() {
    if (this.name.valid && this.surname.valid && this.phone.valid && this.email.valid && this.gender.valid && this.birthday.valid) {
      this.value = 60;
    }

  }
  increaseValue2() {
    if (this.experience.valid && this.work.valid) {
      this.value = 80;
    }

  }
  //Form 1
  name: FormControl = new FormControl('', Validators.required);
  surname: FormControl = new FormControl('', Validators.required);
  phone: FormControl = new FormControl('', [Validators.minLength(9), Validators.maxLength(12)]);
  email: FormControl = new FormControl('', Validators.email);
  gender: FormControl = new FormControl('', Validators.required);//gender custom
  birthday: FormControl = new FormControl('', Validators.required);

  //Form 2
  experience: FormControl = new FormControl('', Validators.required);
  work: FormControl = new FormControl('', Validators.required);

  //Form 3
  more16: FormControl = new FormControl('', Validators.required);
  privateP: FormControl = new FormControl('', Validators.required);//politicas d privacidad
  instaAngus: FormControl = new FormControl('', Validators.required);
  robot: FormControl = new FormControl('', Validators.required);

  //Form 1
  firstFormGroup: FormGroup = new FormGroup({
    name: this.name,
    surname: this.surname,
    phone: this.phone,
    email: this.email,
    gender: this.gender,
    birthday: this.birthday,
    experience: this.experience,
    work: this.work,
  });
  //Form 2
  secondFormGroup: FormGroup = new FormGroup({
    robot: this.robot,
    privateP: this.privateP,
    more16: this.more16,
    instaAngus: this.instaAngus
  })

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  //CheckBoxes Form3
  task = {
    name: 'Accept All',
    completed: false,
    color: 'primary',
    subtasks: [
      {
        name: '+16?',
        completed: false,
        color: 'primary',
        controlName: 'more16'
      },
      {
        name: 'Read and Accept Polity of Privacy',
        completed: false,
        color: 'info',
        controlName: 'privateP'
      },
      {
        name: 'You follow Angus on Instagram',
        completed: false,
        color: 'warn',
        controlName: 'instaAngus'
      },
    ],
  };

  allComplete = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {

    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
  //10,14

  // checkedTest=true;
  // clicked = false;
  classType = "clickedFalse";
  testCheck(event: Event) {
    const target = event.target as HTMLImageElement;
    const value = target.alt;
    console.log(value);

    if (this.value == 1) {
      console.log("a")
      if (this.classType === "clickedFalse") {
        this.classType = "clickedTrue"
      } else {
        this.classType = "clickedFalse";
      }
    }
  }
  constructor(private userServices: userService, private router: Router) { }
  Click(data:User) {
    // console.log(datos);
    if (this.robot.valid && this.privateP.valid) {
      console.log("dsa");
      this.value = 100;
      this.userServices.addUser(data).subscribe(data => console.log("data: " + data));
    }
  }
}