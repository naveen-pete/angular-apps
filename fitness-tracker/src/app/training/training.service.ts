import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/firestore";

import { Exercise } from './exercise.model';

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
    private db: AngularFirestore
  ) { }

  fetchAvailableExercises() {
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
      .subscribe(exercises => {
        this.availableExercises = exercises;
        this.exercisesChanged.next([...this.availableExercises]);
      })
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
}
