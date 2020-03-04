import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LabelService } from 'src/app/system-common/services/label.service';

@Component({
  selector: 'sym-proposer',
  templateUrl: './proposer.component.html',
  styleUrls: ['./proposer.component.css']
})
export class ProposerComponent implements OnInit, OnChanges {
  @Input() model: any;
  @Input() metadata: any;
  @Input() lookups: any;

  fieldKeys = ['firstname', 'lastname', 'genderCd', 'maritalStatus', 'dob', 'age', 'relationCd', 'industryCd'];

  sectionHeader = '';
  fields = [];

  constructor(private labelService: LabelService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.model.currentValue && changes.metadata.currentValue && changes.lookups.currentValue) {
      this.initFields();
    }
  }

  ngOnInit(): void {
    this.sectionHeader = this.labelService.getLabelValue('policyProposerDetails');
  }

  initFields() {
    this.fields = this.fieldKeys.map(key => this.createField(key));
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
