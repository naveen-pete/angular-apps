import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { BusinessCommonRoutingModule } from './business-common-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BusinessCommonRoutingModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    BusinessCommonRoutingModule
  ]
})
export class BusinessCommonModule { }
