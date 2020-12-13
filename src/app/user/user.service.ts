import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList: User[] = [
    new User(
        1,
        'Daniel'),
    new User(
        2,
        'Donald'),
    new User(
        3,
        'Dagobert'),
];

  constructor() { }

  getAllUser() {
    return this.userList;
  }

}
