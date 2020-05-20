import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, take } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/firestore";
import { Store } from "@ngrx/store";

import { Exercise } from './exercise.model';
import { UIService } from '../shared/ui.service';
import { StartLoading, StopLoading } from "../ngrx/actions/ui.actions";
import { SetAvailableTrainings, SetFinishedTrainings, StartTraining, StopTraining } from "../ngrx/actions/training.actions";
import { State, getActiveExercise } from "../ngrx/reducers/training.reducer";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
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
        (exercises: Exercise[]) => {
          this.dispatchStopLoading();
          this.dispatchSetAvailableTrainings(exercises);
        },
        error => {
          this.dispatchStopLoading();
          this.uiService.showMessage('Fetching Exercises failed, please try again later.', null, 3000);
          console.log('Error:', error);
        }
      )
    );
  }

  startExercise(exerciseId: string) {
    this.dispatchStartTraining(exerciseId);
  }

  completeExercise() {
    this.store.select(getActiveExercise).pipe(take(1)).subscribe(exercise => {
      this.addDataToDatabase({
        ...exercise,
        date: new Date(),
        state: 'completed'
      });
      this.dispatchStopTraining();
    });
  }

  cancelExercise(progress: number) {
    this.store.select(getActiveExercise).pipe(take(1)).subscribe(exercise => {
      this.addDataToDatabase({
        ...exercise,
        duration: exercise.duration * (progress / 100),
        calories: exercise.calories * (progress / 100),
        date: new Date(),
        state: 'cancelled'
      });
      this.dispatchStopTraining();
    });
  }

  fetchCompletedOrCancelledExercises() {
    this.subscriptions.push(this.db.collection('finishedExercises')
      .valueChanges()
      .subscribe((exercises: Exercise[]) => {
        this.dispatchSetFinishedTrainings(exercises);
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

  private dispatchSetAvailableTrainings(exercises: Exercise[]) {
    this.store.dispatch(new SetAvailableTrainings(exercises));
  }

  private dispatchSetFinishedTrainings(exercises: Exercise[]) {
    this.store.dispatch(new SetFinishedTrainings(exercises));
  }

  private dispatchStartTraining(exerciseId: string) {
    this.store.dispatch(new StartTraining(exerciseId));
  }

  private dispatchStopTraining() {
    this.store.dispatch(new StopTraining());
  }
}
