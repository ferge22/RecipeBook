import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    // promise
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => {
          console.log(error);
        }
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        console.log(response);
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => {
              this.token = token;
            }
          );
      }
    )
    .catch(
      response => {
        console.log(response);
      }
    );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
    .then(
      (token: string) => {this.token = token; }
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  loadUser() {
    firebase.auth().onAuthStateChanged((currentUser) => {
        console.log(currentUser);
        if (currentUser === null) {
            this.token = null;
        } else {
            currentUser.getIdToken().then(
                (token: string) => this.token = token
            );
        }
    });
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}
