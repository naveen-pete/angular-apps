import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";
import { Store } from '@ngrx/store';


import { AuthData } from './auth-data.model';
import { TrainingService } from '../training/training.service';
import { UIService } from '../shared/ui.service';
import { State } from "../ngrx/reducers/ui.reducer";
import { StartLoading, StopLoading } from "../ngrx/actions/ui.actions";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private trainingService: TrainingService,
    private uiService: UIService,
    private store: Store<State>
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

  dispatchStartLoading() {
    this.store.dispatch(new StartLoading());
  }

  dispatchStopLoading() {
    this.store.dispatch(new StopLoading());
  }

  async registerUser(authData: AuthData) {
    this.dispatchStartLoading();
    try {
      await this.afAuth.createUserWithEmailAndPassword(
        authData.email,
        authData.password
      );

      this.dispatchStopLoading();
    } catch (e) {
      this.dispatchStopLoading();
      this.uiService.showMessage(e.message, null, 3000);
      console.log('Register User Error:', e);
    }
  }

  async login(authData: AuthData) {
    this.dispatchStartLoading();
    try {
      await this.afAuth.signInWithEmailAndPassword(
        authData.email,
        authData.password
      );

      this.dispatchStopLoading();
    } catch (e) {
      this.dispatchStopLoading();
      this.uiService.showMessage(e.message, null, 3000);
      console.log('Login Error:', e);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (e) {
      console.log('Logout failed.');
      console.log('Logout Error:', e);
    }
  }

  isAuth() {
    return this.isAuthenticated;
  }
}
