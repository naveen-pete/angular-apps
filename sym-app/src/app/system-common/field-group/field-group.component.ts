import { Component, Input } from '@angular/core';
import { FieldItem } from '../models/field-item';

@Component({
  selector: 'sym-field-group',
  templateUrl: './field-group.component.html',
  styleUrls: ['./field-group.component.css']
})
export class FieldGroupComponent {
  @Input() fields: FieldItem[] = [];

  constructor() { }
}
