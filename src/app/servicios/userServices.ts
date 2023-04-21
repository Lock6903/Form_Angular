import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/internal/Observable';
import { User } from "./userInterface";

@Injectable()
export class userService{
    constructor(private http: HttpClient) { }
    private urlUsers = 'http://172.16.22.80:8080/user';

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.urlUsers);
      }
    
      getUserById(id: string): Observable<User> {
        return this.http.get<User>(`${this.urlUsers}/${id}`);
      }
    
      addUser(user: User): Observable<User> {
        console.log(user);
        
        return this.http.post<User>(this.urlUsers, user);
      }
    
      updateUser(id: string, user: User): Observable<User> {
        return this.http.put<User>(`${this.urlUsers}/${id}`, user);
      }
    
      deleteUser(id: string): Observable<any> {
        return this.http.delete(`${this.urlUsers}/${id}`);
      }

}
