import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";

import { AuthData } from './auth-data.model';
import { TrainingService } from '../training/training.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private trainingService: TrainingService
  ) { }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/training']);
      } else {
        this.trainingService.cancelSubscriptions();
        this.isAuthenticated = false;
        this.authChange.next(false);
        this.router.navigate(['/login']);
      }
    });
  }

  async registerUser(authData: AuthData) {
    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(
        authData.email,
        authData.password
      );
    } catch (e) {
      console.log('Register user failed.');
      console.log('Error:', e);
    }
  }

  async login(authData: AuthData) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(
        authData.email,
        authData.password
      );
    } catch (e) {
      console.log('Login failed.');
      console.log('Error:', e);
    }
  }

  async logout() {
    try {
      await this.afAuth.auth.signOut();
    } catch (e) {
      console.log('Logout failed.');
      console.log('Error:', e);
    }
  }

  isAuth() {
    return this.isAuthenticated;
  }
}
