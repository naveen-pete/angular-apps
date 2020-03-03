import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  private apiUrl = 'http://localhost:3000/labels';
  private labelResource = {};
  private loaded = false;

  constructor(private http: HttpClient) { }

  loadLabels() {
    return this.http.get(this.apiUrl).pipe(
      tap(labelResource => {
        this.labelResource = labelResource;
        this.loaded = true;
      })
    );
  }

  getLabelValue(labelKey: string): string {
    let labelValue = '';
    if (this.loaded) {
      labelValue = this.labelResource[labelKey];
    } else {
      console.log('Labels are not loaded.');
    }
    return labelValue;
  }
}
