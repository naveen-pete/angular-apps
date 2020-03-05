import { Component, Input } from '@angular/core';
import { FieldItem } from '../models/field-item';

@Component({
  selector: 'sym-field-control',
  templateUrl: './field-control.component.html',
  styleUrls: ['./field-control.component.css']
})
export class FieldControlComponent {
  @Input() field: FieldItem;

  getFieldLabel() {
    return `${this.field.label} ${this.field.required ? '*' : ''}`;
  }

  getFieldId(code) {
    return `${this.field.key}_${code}`;
  }
}
