import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuotationComponent } from './quotation/quotation.component';
import { FieldGroupComponent } from './field-group/field-group.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotationComponent,
    FieldGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
