import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserInterface} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  $user: BehaviorSubject<UserInterface | null> = new BehaviorSubject<UserInterface | null>(null)
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
