import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SearchComponent } from './search/search.component';
import { SystemCommonRoutingModule } from './system-common-routing.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    SearchComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SystemCommonRoutingModule
  ],
  exports: [
    SearchComponent,
    MenuComponent
  ]
})
export class SystemCommonModule { }
