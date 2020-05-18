import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription, Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { State, getIsLoading } from "../../ngrx/reducers/app.reducer";

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  isLoading$: Observable<boolean>;

  private exerciseSubscription: Subscription;

  constructor(
    private trainingService: TrainingService,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(getIsLoading);

    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(
      exercises => this.exercises = exercises
    );

    this.fetchExercises();
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  ngOnDestroy() {
    if (this.exerciseSubscription) {
      this.exerciseSubscription.unsubscribe();
    }
  }
}
