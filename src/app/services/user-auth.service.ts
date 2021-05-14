import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUser} from "../interfaces/iuser";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  $user: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null)
  constructor() {
  }

  login() {
    this.$user.next({
      name: "John Dou",
      photo: "john-dou.svg"
    })
  }

  logout() {
    this.$user.next(null)
  }
}
