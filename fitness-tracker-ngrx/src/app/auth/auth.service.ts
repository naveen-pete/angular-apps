import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { Store } from '@ngrx/store';

import { AuthData } from './auth-data.model';
import { TrainingService } from '../training/training.service';
import { UIService } from '../shared/ui.service';
import { State as AppState } from "../ngrx/reducers/app.reducer";
import { StartLoading, StopLoading } from "../ngrx/actions/ui.actions";
import { SetAuthenticated, SetUnauthenticated } from "../ngrx/actions/auth.actions";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private trainingService: TrainingService,
    private uiService: UIService,
    private store: Store<AppState>
  ) { }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.dispatchSetAuthenticated();
        this.router.navigate(['/training']);
      } else {
        this.trainingService.cancelSubscriptions();
        this.dispatchSetUnauthenticated();
        this.router.navigate(['/login']);
      }
    });
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

  private dispatchSetAuthenticated() {
    this.store.dispatch(new SetAuthenticated());
  }

  private dispatchSetUnauthenticated() {
    this.store.dispatch(new SetUnauthenticated());
  }

  private dispatchStartLoading() {
    this.store.dispatch(new StartLoading());
  }

  private dispatchStopLoading() {
    this.store.dispatch(new StopLoading());
  }
}
