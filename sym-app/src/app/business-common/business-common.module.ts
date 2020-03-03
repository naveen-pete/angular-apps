import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BusinessCommonRoutingModule } from './business-common-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BusinessCommonRoutingModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BusinessCommonRoutingModule
  ]
})
export class BusinessCommonModule { }
