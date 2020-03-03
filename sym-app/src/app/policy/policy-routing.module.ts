import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicySearchComponent } from './policy-search/policy-search.component';


const routes: Routes = [
  { path: 'policy', component: PolicySearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyRoutingModule { }
