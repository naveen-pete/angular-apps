import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  private apiUrl = 'http://localhost:3000/labels';
  private labelResource = {};
  private loaded = false;

  constructor(private http: HttpClient) { }

  loadLabels() {
    this.http.get(this.apiUrl).subscribe(
      labelResource => {
        this.labelResource = labelResource;
        console.log('Labels loaded successfully.');
        this.loaded = true;
      },
      error => {
        console.log('Get labels failed.');
        console.log('Error:', error);
      }
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
