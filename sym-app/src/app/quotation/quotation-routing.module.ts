import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotationSearchComponent } from './quotation-search/quotation-search.component';

const routes: Routes = [
  { path: 'quotation', component: QuotationSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationRoutingModule { }
