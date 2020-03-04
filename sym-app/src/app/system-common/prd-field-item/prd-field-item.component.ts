import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sym-prd-field-item',
  templateUrl: './prd-field-item.component.html',
  styleUrls: ['./prd-field-item.component.css']
})
export class PrdFieldItemComponent {
  @Input() field: any;
}
