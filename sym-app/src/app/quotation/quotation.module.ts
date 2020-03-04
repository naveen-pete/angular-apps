import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuotationRoutingModule } from './quotation-routing.module';
import { QuotationFormComponent } from './quotation-form/quotation-form.component';
import { BasePlanComponent } from './base-plan/base-plan.component';
import { ProposerComponent } from './proposer/proposer.component';
import { BasicDetailComponent } from './basic-detail/basic-detail.component';
import { PrimaryInsuredComponent } from './primary-insured/primary-insured.component';

@NgModule({
  declarations: [QuotationFormComponent, BasePlanComponent, ProposerComponent, BasicDetailComponent, PrimaryInsuredComponent],
  imports: [
    CommonModule,
    FormsModule,
    QuotationRoutingModule
  ]
})
export class QuotationModule { }
