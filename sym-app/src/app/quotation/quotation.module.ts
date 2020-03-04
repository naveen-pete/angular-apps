import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuotationRoutingModule } from './quotation-routing.module';
import { QuotationFormComponent } from './quotation-form/quotation-form.component';
import { BasePlanComponent } from './base-plan/base-plan.component';
import { ProposerComponent } from './proposer/proposer.component';
import { BasicDetailComponent } from './basic-detail/basic-detail.component';
import { PrimaryInsuredComponent } from './primary-insured/primary-insured.component';
import { SystemCommonModule } from '../system-common/system-common.module';
import { ProposerNewComponent } from './proposer-new/proposer-new.component';

@NgModule({
  declarations: [QuotationFormComponent, BasePlanComponent, ProposerComponent, BasicDetailComponent, PrimaryInsuredComponent, ProposerNewComponent],
  imports: [
    CommonModule,
    FormsModule,
    SystemCommonModule,
    QuotationRoutingModule
  ]
})
export class QuotationModule { }
