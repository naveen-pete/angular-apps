import { Injectable } from '@angular/core';
import { FieldItem } from '../models/field-item';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  private changeEventHandlers = {
    firstname: this.handleFirstnameChange,
    lastname: this.handleLastnameChange,
    dob: this.handleDobChange,
    age: this.handleAgeChange
  }

  constructor() { }

  handleChange(field: FieldItem) {
    const handleEvent = this.changeEventHandlers[field.key];
    handleEvent(field);
  }

  private handleFirstnameChange(field: FieldItem) {
    console.log('QuotationService.handleFirstnameChange() invoked.');
    console.log('  field:', field);
  }

  private handleLastnameChange(field: FieldItem) {
    console.log('QuotationService.handleLastnameChange() invoked.');
    console.log('  field:', field);
  }

  private handleDobChange(field: FieldItem) {
    console.log('QuotationService.handleDobChange() invoked.');
    console.log('  field:', field);
  }

  private handleAgeChange(field: FieldItem) {
    console.log('QuotationService.handleAgeChange() invoked.');
    console.log('  field:', field);
  }
}
