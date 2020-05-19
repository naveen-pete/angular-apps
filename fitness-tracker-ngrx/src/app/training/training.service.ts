import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/firestore";
import { Store } from "@ngrx/store";

import { Exercise } from './exercise.model';
import { UIService } from '../shared/ui.service';
import { StartLoading, StopLoading } from "../ngrx/actions/ui.actions";
import { State } from "../ngrx/reducers/app.reducer";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  exercisesChanged = new Subject<Exercise[]>();
  finishedExercisesChanged = new Subject<Exercise[]>();

  private availableExercises: Exercise[] = [];
  private runningExercise: Exercise;

  private subscriptions: Subscription[] = [];

  constructor(
    private db: AngularFirestore,
    private uiService: UIService,
    private store: Store<State>
  ) { }

  fetchAvailableExercises() {
    this.dispatchStartLoading();
    this.subscriptions.push(this.db.collection('availableExercises')
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data: any = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {
            id,
            ...data
          };
        }))
      )
      .subscribe(
        exercises => {
          this.dispatchStopLoading();
          this.availableExercises = exercises;
          this.exercisesChanged.next([...this.availableExercises]);
        },
        error => {
          this.dispatchStopLoading();
          this.uiService.showMessage('Fetching Exercises failed, please try again later.', null, 3000);
          console.log('Error:', error);
          this.exercisesChanged.next(null);
        }
      )
    );
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(
      ex => ex.id === selectedId
    );
    this.exerciseChanged.next({ ...this.runningExercise });
  }

  completeExercise() {
    this.addDataToDatabase({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.addDataToDatabase({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  fetchCompletedOrCancelledExercises() {
    this.subscriptions.push(this.db.collection('finishedExercises')
      .valueChanges()
      .subscribe((exercises: Exercise[]) => {
        this.finishedExercisesChanged.next(exercises);
      })
    );
  }

  cancelSubscriptions() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private addDataToDatabase(exercise: Exercise) {
    this.db.collection('finishedExercises')
      .add(exercise)
      .then(() => console.log('Exercise saved in the store successfully.'))
      .catch(error => {
        console.log('Save exercise failed.');
        console.log('Error:', error);
      });
  }

  private dispatchStartLoading() {
    this.store.dispatch(new StartLoading());
  }

  private dispatchStopLoading() {
    this.store.dispatch(new StopLoading());
  }
}
