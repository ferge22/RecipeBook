import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
  signupUser(email: string, password: string) {
    // promise
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => {
          console.log(error);
        }
      );
  }
}
