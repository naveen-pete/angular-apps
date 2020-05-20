import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { State, getOngoingTraining } from '../ngrx/reducers/training.reducer';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  ongoingTraining$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.ongoingTraining$ = this.store.select(getOngoingTraining);
  }
}
