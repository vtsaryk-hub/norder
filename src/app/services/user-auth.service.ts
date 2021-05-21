import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUser} from "../interfaces/user.interface";
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import firebase from "firebase";
import UserCredential = firebase.auth.UserCredential;
import auth = firebase.auth;
import AuthProvider = firebase.auth.AuthProvider;
import User = firebase.User;

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  userData: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);
  user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.user.next(user);
      } else {
        this.userData.next(null);
        localStorage.removeItem('user')
      }
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(<string>localStorage.getItem('user'));
    return user !== null && user.emailVerified;
  }

  private setUserData(user: any, displayName: string = '') {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    userRef.valueChanges().subscribe((data) => {
      this.userData.next(data);
    });
    const userName = user.displayName || displayName;

    const userData: IUser = {
      uid: user.uid,
      email: user.email,
      displayName: userName,
      photoURL: user.photoURL || this.generateUserPhoto(userName),
    }

    return userRef.set(userData, {
      merge: true
    })
  }

  private sendVerificationMail() {
    return this.afAuth.currentUser.then(user => user?.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email']);
      })
  }

  private authLogin(provider: AuthProvider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result: UserCredential) => {
        if (result.user) {
          this.ngZone.run(() => {
            this.router.navigate(['transactions'])
          })
          this.setUserData(result.user)
        }
      }).catch(error => {
        // todo: catch fb auth with provider error
        console.log(error)
      })
  }

  private generateUserPhoto(displayName: string = ''): string {
    const colors = [
      '1ABC9C',
      '16A085',
      '52BE7F',
      '3498DB',
      '2980B9',
      'AF7AC4',
      '8E44AD',
      '34495E',
      '2C3E50',
      'F1C40F',
      'F39C12',
      'EB974E',
      'D35400',
      'C0392B',
      '7F8C8D',
    ];

    function randomInteger(min: number, max: number) {
      const rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }

    const name = displayName.split(' ').length > 1 ? displayName.split(' ').join('+') : displayName[0];

    return `https://eu.ui-avatars.com/api/?name=${name}&background=${colors[randomInteger(9, colors.length - 1)]}&color=fff&size=256`;
  }

  public signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result: UserCredential) => {
        if (result.user) {
          this.ngZone.run(() => {
            this.router.navigate(['transactions']);
          })
          this.setUserData(result.user)
        }
      }).catch((error) => {
        // todo: catch fb auth signIN error
        console.log(error)
      })
  }

  public signUp(email: string, password: string, displayName: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result: UserCredential) => {
          if (result.user) {
            this.sendVerificationMail();
            this.setUserData(result.user, displayName)
          }
        }
      ).catch((error) => {
        // todo: catch fb auth signUP error
        console.log(error)
      })
  }

  public googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider());
  }

  public signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.userData.next(null);
      this.router.navigate(['sign-in'])
    })
  }

}
