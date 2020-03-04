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
  @Input() metadata: any = {};
  @Input() lookups: any;

  sectionHeader = '';

  fieldCodes = ['quotationRefNum', 'quotationDt'];

  fields = [];


  constructor(private labelService: LabelService) { }

  ngOnInit(): void {
    this.sectionHeader = this.labelService.getLabelValue('basicDetails');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.model.currentValue && changes.metadata.currentValue) {
      this.initFields();
    }
  }

  initFields() {
    this.fields = this.fieldCodes.map(code => {
      return this.createField(code);
    });
  }

  createField(code) {
    const fieldMetadata = this.metadata[code];

    const value = this.model[code] || "";
    const label = this.labelService.getLabelValue(fieldMetadata.LABELKEY);
    const required = fieldMetadata.MINOCCURS === '1' ? true : false;
    const maxlength = fieldMetadata.MAXLENGTH;
    const type = fieldMetadata.INPUTTYPECD || 'TEXT';
    const options = fieldMetadata.LOOKUPCD ? this.lookups[fieldMetadata.LOOKUPCD] : null;
    const enabled = fieldMetadata.ENABLED === 'YES' ? true : false;

    return {
      code,
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