import { Injectable } from '@angular/core';
import { SearchResult } from '../models/search-result';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  result: SearchResult = {
    fields: ['Quotation No', 'Quotation Date', 'Insured Name'],
    values: [
      ['1', '01-Jan-20', 'Krish'],
      ['2', '01-Feb-20', 'Ram'],
      ['3', '01-Mar-20', 'John']
    ]
  };

  search(searchId: string) {
    return this.result;
  }
}