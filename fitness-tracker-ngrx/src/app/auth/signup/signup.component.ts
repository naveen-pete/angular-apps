import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthService } from '../auth.service';
import { State, getIsLoading } from "../../ngrx/reducers/app.reducer";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate: Date;
  isLoading$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(getIsLoading);

    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }
}
