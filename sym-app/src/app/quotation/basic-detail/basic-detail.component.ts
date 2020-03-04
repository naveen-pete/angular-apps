import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LabelService } from 'src/app/system-common/services/label.service';
import { Quotation } from 'src/app/models/quotation/quotation';

@Component({
  selector: 'sym-basic-detail',
  templateUrl: './basic-detail.component.html',
  styleUrls: ['./basic-detail.component.css']
})
export class BasicDetailComponent implements OnInit, OnChanges {
  @Input() model: Quotation;
  @Input() metadata: any;
  @Input() lookups: any;

  fieldKeys = ['quotationRefNum', 'quotationDt'];

  sectionHeader = '';
  fields = [];

  constructor(private labelService: LabelService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.model.currentValue && changes.metadata.currentValue && changes.lookups.currentValue) {
      this.initFields();
    }
  }

  ngOnInit(): void {
    this.sectionHeader = this.labelService.getLabelValue('basicDetails');
  }

  initFields() {
    this.fields = this.fieldKeys.map(code => this.createField(code));
  }

  createField(key: string) {
    const fieldMetadata = this.metadata[key];

    const value = this.model[key] || "";
    const label = this.labelService.getLabelValue(fieldMetadata.LABELKEY);
    const required = fieldMetadata.MINOCCURS === '1' ? true : false;
    const maxlength = fieldMetadata.MAXLENGTH;
    const type = fieldMetadata.INPUTTYPECD || 'TEXT';
    const options = fieldMetadata.LOOKUPCD ? this.lookups[fieldMetadata.LOOKUPCD] : null;
    const enabled = fieldMetadata.ENABLED === 'YES' ? true : false;

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
