import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuotationRoutingModule } from './quotation-routing.module';
import { QuotationFormComponent } from './quotation-form/quotation-form.component';

import { SystemCommonModule } from '../system-common/system-common.module';
import { QuotationSectionComponent } from './quotation-section/quotation-section.component';

@NgModule({
  declarations: [
    QuotationFormComponent,
    QuotationSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SystemCommonModule,
    QuotationRoutingModule
  ]
})
export class QuotationModule { }
