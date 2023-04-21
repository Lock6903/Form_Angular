import { Component, OnInit } from '@angular/core';
import { userService } from '../../servicios/userServices';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../servicios/userInterface';
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

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.user = this.user.filter(user => user.name.toLowerCase().includes(filterValue));
  }
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((user: User[])=>{this.user=user; this.usersService.getUsers()} );
  }
}