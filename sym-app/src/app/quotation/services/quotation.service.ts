import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  private apiUrl = environment.apiUrl.quotations;

  constructor(private http: HttpClient) { }

  getQuotation(id: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(`${this.apiUrl}?id=${id}`, { headers: headers });
  }
}
