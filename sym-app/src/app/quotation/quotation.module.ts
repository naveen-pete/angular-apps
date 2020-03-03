import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuotationRoutingModule } from './quotation-routing.module';
import { QuotationFormComponent } from './quotation-form/quotation-form.component';

@NgModule({
  declarations: [QuotationFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    QuotationRoutingModule
  ]
})
export class QuotationModule { }
