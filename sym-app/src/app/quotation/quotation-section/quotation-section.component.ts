import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FieldItem } from 'src/app/system-common/models/field-item';
import { LabelService } from 'src/app/system-common/services/label.service';
import { SectionData } from 'src/app/models/quotation/section-data';

@Component({
  selector: 'sym-quotation-section',
  templateUrl: './quotation-section.component.html',
  styleUrls: ['./quotation-section.component.css']
})
export class QuotationSectionComponent implements OnInit, OnChanges {
  @Input() sectionHeaderKey: string;
  @Input('fieldKeys') fieldKeysAsString: string = '';
  @Input() data: SectionData;
  @Input() lookups: any;

  sectionHeader = '';
  fieldItems: FieldItem[] = [];

  constructor(private labelService: LabelService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data.currentValue && changes.lookups.currentValue) {
      this.initFields();
    }
  }

  ngOnInit(): void {
    this.sectionHeader = this.labelService.getLabelValue(this.sectionHeaderKey);
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
    const maxlength = MAXLENGTH;
    const type = INPUTTYPECD || 'TEXT';
    const options = LOOKUPCD ? this.lookups[LOOKUPCD] : null;
    const enabled = ENABLED === 'YES' ? true : false;

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
