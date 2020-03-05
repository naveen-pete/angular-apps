import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search/search.component';
import { SystemCommonRoutingModule } from './system-common-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FieldGroupComponent } from './field-group/field-group.component';
import { FieldControlComponent } from './field-control/field-control.component';

@NgModule({
  declarations: [
    SearchComponent,
    MenuComponent,
    FieldGroupComponent,
    FieldControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SystemCommonRoutingModule
  ],
  exports: [
    SearchComponent,
    MenuComponent,
    FieldGroupComponent
  ]
})
export class SystemCommonModule { }
