import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _USER: User[] = [
    {
      id: 1,
      name: "admin",
      email: "admin@mgmail.com",
      pass: "$2a$04$aRYAGeJbvX20Cb26UPoPdeFiiuqIbhSwOObz7UU7.nRu3rbsCNVUu",
      age: 50,
      role: "ROLE_ADMIN",
    } as User,
    {
      id: 2,
      name: "user",
      email: "user@gmail.com",
      pass: "$2a$04$kC3QuGXSejTid5IHELpRru9yoPTbUNH1StCt.BHAg/XFn/lyRmw2C",
      age: 30,
      role: "ROLE_USER",
    } as User,
    {
      id: 3,
      name: "user2",
      email: "user2@mgmail.com",
      pass: "$2a$04$kC3QuGXSejTid5IHELpRru9yoPTbUNH1StCt.BHAg/XFn/lyRmw2C",
      age: 12,
      role: "ROLE_USER",
    } as User,
  ];

  constructor() { }

  public getUsers() : User[] {
    return this._USER;
  }

  public getUser(id: number) : User {
    for (let user of this._USER) {
      if (user.id == id) {
        return user;
      }
    }
  }
  
}
