import { Component, Input } from '@angular/core';
import { FieldItem } from '../models/field-item';

@Component({
  selector: 'sym-prd-field-group',
  templateUrl: './prd-field-group.component.html',
  styleUrls: ['./prd-field-group.component.css']
})
export class PrdFieldGroupComponent {
  @Input() fields: FieldItem[] = [];

  constructor() { }
}
