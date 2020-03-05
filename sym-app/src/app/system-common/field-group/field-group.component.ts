import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FieldItem } from '../models/field-item';
import { SectionData } from '../models/section-data';
import { LabelService } from '../services/label.service';

@Component({
  selector: 'sym-field-group',
  templateUrl: './field-group.component.html',
  styleUrls: ['./field-group.component.css']
})
export class FieldGroupComponent implements OnChanges {
  @Input('fieldKeys') fieldKeysAsString: string = '';
  @Input() data: SectionData;
  @Input() lookups: any;

  fieldItems: FieldItem[] = [];

  constructor(private labelService: LabelService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data.currentValue && changes.lookups.currentValue) {
      this.initFields();
    }
  }

  initFields() {
    if (this.fieldKeysAsString.length > 0) {
      const fieldKeys = this.fieldKeysAsString.split(',');
      this.fieldItems = fieldKeys.map(key => this.createField(key.trim()));
    }
  }

  createField(key: string): FieldItem {
    const { model, metadata } = this.data;
    const { LABELKEY, MINOCCURS, MAXLENGTH, INPUTTYPECD, LOOKUPCD, ENABLED } = metadata[key];

    const value = model[key] || "";
    const label = this.labelService.getLabelValue(LABELKEY);
    const required = MINOCCURS === '1' ? true : false;
    const maxlength = MAXLENGTH || 100;
    const type = INPUTTYPECD || 'TEXT';
    const options = LOOKUPCD ? this.lookups[LOOKUPCD] : null;
    const enabled = ENABLED === 'NO' ? false : true;

    return {
      key,
      label,
      value,
      required,
      maxlength,
      type,
      options,
      enabled
    };
  }
}
