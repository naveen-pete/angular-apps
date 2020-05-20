import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { getIsLoading } from "../../ngrx/reducers/app.reducer";
import { State, getAvailableExercises } from '../../ngrx/reducers/training.reducer';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises$: Observable<Exercise[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private trainingService: TrainingService,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(getIsLoading);
    this.exercises$ = this.store.select(getAvailableExercises);

    this.fetchExercises();
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
