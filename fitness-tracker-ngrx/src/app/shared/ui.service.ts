import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  constructor(private snackbar: MatSnackBar) { }

  showMessage(message, action, duration) {
    this.snackbar.open(message, action, {
      duration: duration
    });
  }
}
