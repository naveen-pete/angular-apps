import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotationSearchComponent } from './quotation-search/quotation-search.component';
import { QuotationRoutingModule } from './quotation-routing.module';

@NgModule({
  declarations: [QuotationSearchComponent],
  imports: [
    CommonModule,
    QuotationRoutingModule
  ]
})
export class QuotationModule { }
