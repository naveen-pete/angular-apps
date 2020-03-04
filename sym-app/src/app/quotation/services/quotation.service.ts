import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  private apiUrl = environment.apiUrl.quotations;

  constructor(private http: HttpClient) { }

  getQuotation(id: number) {
    return this.http.get(`${this.apiUrl}?id=${id}`);
  }
}