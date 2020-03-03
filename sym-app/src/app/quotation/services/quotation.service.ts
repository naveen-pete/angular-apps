import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  private apiUrl = 'http://localhost:3000/quotations';

  constructor(private http: HttpClient) { }

  getQuotation(id: number) {
    return this.http.get(`${this.apiUrl}?id=${id}`);
  }
}