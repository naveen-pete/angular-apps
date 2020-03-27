import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthData } from './auth-data.model';
import { TrainingService } from '../training/training.service';
import { UIService } from '../shared/ui.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private snackbar: MatSnackBar,
    private trainingService: TrainingService,
    private uiService: UIService
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
    this.uiService.loadingStateChanged.next(true);
    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(
        authData.email,
        authData.password
      );
      this.uiService.loadingStateChanged.next(false);
    } catch (e) {
      this.uiService.loadingStateChanged.next(false);
      this.snackbar.open(e.message, null, {
        duration: 3000
      });
      console.log('Register User Error:', e);
    }
  }

  async login(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(
        authData.email,
        authData.password
      );
      this.uiService.loadingStateChanged.next(false);
    } catch (e) {
      this.uiService.loadingStateChanged.next(false);
      this.snackbar.open(e.message, null, {
        duration: 3000
      });
      console.log('Login Error:', e);
    }
  }

  async logout() {
    try {
      await this.afAuth.auth.signOut();
    } catch (e) {
      console.log('Logout failed.');
      console.log('Logout Error:', e);
    }
  }

  isAuth() {
    return this.isAuthenticated;
  }
}
