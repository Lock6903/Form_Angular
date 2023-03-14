import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class userService{
    constructor(){}
    users:User[] = [ ];

    public sendUsers(name:string, surname:string, phone:string, email:string, gender: string, birthday:Date, experience:string, work: string, robot: boolean, privateP:boolean, more16:boolean, instaAngus:boolean):Observable<User[]>{
        if(name != "" && surname != "" && phone != ""){
            this.users.push({name: name, surname: surname, phone :phone, email :email, gender: gender, birthday:birthday, experience:experience, work:work, robot:robot, privateP:privateP, more16:more16, instaAngus:instaAngus});
        }
        return of(this.users);
    }

}
export interface User {
    name: string; 
    surname:string; 
    phone:string;
    email:string;
    gender:string; 
    birthday:Date; 

    experience:string; 
    work:string; 
    
    robot:boolean; 
    privateP:boolean; 
    more16:boolean; 
    instaAngus:boolean
}