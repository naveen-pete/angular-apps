import { Component, Input } from '@angular/core';
import { FieldItem } from '../models/field-item';

@Component({
  selector: 'sym-prd-field-item',
  templateUrl: './prd-field-item.component.html',
  styleUrls: ['./prd-field-item.component.css']
})
export class PrdFieldItemComponent {
  @Input() field: FieldItem;
}
