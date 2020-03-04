import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search/search.component';
import { SystemCommonRoutingModule } from './system-common-routing.module';
import { MenuComponent } from './menu/menu.component';
import { PrdFieldGroupComponent } from './prd-field-group/prd-field-group.component';
import { PrdFieldItemComponent } from './prd-field-item/prd-field-item.component';

@NgModule({
  declarations: [
    SearchComponent,
    MenuComponent,
    PrdFieldGroupComponent,
    PrdFieldItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SystemCommonRoutingModule
  ],
  exports: [
    SearchComponent,
    MenuComponent,
    PrdFieldGroupComponent
  ]
})
export class SystemCommonModule { }
