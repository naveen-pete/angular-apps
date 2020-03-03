import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotationFormComponent } from './quotation-form/quotation-form.component';

const routes: Routes = [
  { path: 'quotation/:id', component: QuotationFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationRoutingModule { }
