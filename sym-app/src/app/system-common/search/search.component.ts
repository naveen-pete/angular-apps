import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from '../services/search.service';
import { SearchResult } from '../models/search-result';

@Component({
  selector: 'sym-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items: any[] = [];
  searchResult: SearchResult = {
    fields: [],
    values: []
  };
  link = '/quotation';

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      const searchId = map.get('id');
      this.searchResult = this.searchService.search(searchId);
    });
  }

  mapSearchResultToItems(searchResult: SearchResult) {
  }

  getLink(routeParamValue) {
    return `${this.link}/${routeParamValue}`;
  }

}
