import { Injectable } from '@angular/core';
import { SearchResult } from '../models/search-result';
import { SearchResultField } from '../models/search-result-field';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  quotationIdField: SearchResultField = {
    name: 'Quotation Id',
    link: '',
    submit: null,
    position: 0,
    isVisible: false
  }

  result: SearchResult = {
    fields: [
      this.quotationIdField,
      {
        name: 'Quotation Reference No',
        link: '/quotation',
        submit: this.quotationIdField,
        position: 1,
        isVisible: true
      },
      {
        name: 'Quotation Date',
        link: '',
        submit: null,
        position: 2,
        isVisible: true
      },
      {
        name: 'Insured Name',
        link: '',
        submit: null,
        position: 3,
        isVisible: true
      }
    ],
    values: [
      ['661', 'ABC123', '01-Jan-20', 'Krish'],
      ['662', 'DEF456', '01-Feb-20', 'Ram'],
      ['663', 'GHI789', '01-Mar-20', 'John']
    ]
  };

  search(searchId: string) {
    return this.result;
  }
}
