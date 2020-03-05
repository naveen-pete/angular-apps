import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from '../services/search.service';
import { SearchResult } from '../models/search-result';
import { SearchResultField } from '../models/search-result-field';

@Component({
  selector: 'sym-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult: SearchResult = {
    fields: [],
    values: []
  };

  headerFields: SearchResultField[] = [];

  link = '/quotation';

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      const searchId = map.get('id');
      this.searchResult = this.searchService.search(searchId);
      this.headerFields = this.searchResult.fields.filter(f => f.isVisible);
    });
  }

  isFieldVisible(index: number) {
    return this.searchResult.fields[index].isVisible;
  }

  isFieldLink(index: number) {
    return this.searchResult.fields[index].link ? true : false;
  }

  getLink(index: number, row) {
    const { link, submit: { position } } = this.searchResult.fields[index];
    const paramValue = row[position];
    return `${link}/${paramValue}`;
  }

}
