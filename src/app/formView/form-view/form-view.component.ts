import { Component, OnInit } from '@angular/core';
import { userService } from '../../servicios/userServices';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent {
  user: User[] = [];
  userName: any = "";
  userSurname: any = "";
  userPhone: any = "";
  userEmail: any = "";
  userGender: any = "";
  userBirthday: any = "";
  userExperience: any = "";
  userWork: any = "";
  userRobot: any = "";
  userPrivateP: any = "";
  userMore16: any = "";
  userInstaAngus: any = "";

  constructor(private usersService: userService) { }


  ngOnInit(): void {
    this.usersService.sendUsers(this.userName, this.userSurname, this.userPhone, this.userEmail, this.userGender, this.userBirthday, this.userExperience, this.userWork, this.userRobot, this.userPrivateP, this.userMore16, this.userInstaAngus).subscribe((user: User[]) => {
      this.user = user;
    });
  }
  
  

}

export interface User {
  name: string;
  surname: string;
  phone: string;
  email: string;
  gender: string;
  birthday: Date;

  experience: string;
  work: string;

  robot: boolean;
  privateP: boolean;
  more16: boolean;
  instaAngus: boolean
}