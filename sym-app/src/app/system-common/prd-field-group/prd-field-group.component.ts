import { Component, Input } from '@angular/core';

@Component({
  selector: 'sym-prd-field-group',
  templateUrl: './prd-field-group.component.html',
  styleUrls: ['./prd-field-group.component.css']
})
export class PrdFieldGroupComponent {
  @Input() fields: any = [];

  constructor() { }
}
