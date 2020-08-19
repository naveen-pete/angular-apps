import { Component, OnInit } from '@angular/core';

import { FieldItem } from '../models/field-item';
import { QuotationService } from '../services/quotation.service';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  constructor(private quotationService: QuotationService) { }

  ngOnInit(): void {
  }

  onFieldChange(field: FieldItem) {
    this.quotationService.handleChange(field);
  }
}
