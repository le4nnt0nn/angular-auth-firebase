import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  constructor(private afauth: AngularFireAuth) { }

  async login(email:string, password:string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("login error: ", error);
      return null
    }
  }

  async register(email:string, password:string) {
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("register error: ", error);
      return null
    }
  }

  async loginWithGoogle(email:string, password:string) {
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log("login error with Google: ", error);
      return null
    }
  }

  // Check logged state for user
  getUserLoggedState() {
    return this.afauth.authState;
  }

  // logout to afauth
  logout() {
    this.afauth.signOut();
  }

}
