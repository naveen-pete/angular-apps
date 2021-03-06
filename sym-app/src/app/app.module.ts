import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BusinessCommonModule } from './business-common/business-common.module';
import { QuotationModule } from './quotation/quotation.module';
import { PolicyModule } from './policy/policy.module';
import { SystemCommonModule } from './system-common/system-common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    QuotationModule,
    PolicyModule,
    SystemCommonModule,
    BusinessCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
