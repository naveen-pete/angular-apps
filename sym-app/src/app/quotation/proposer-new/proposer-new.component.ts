import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LabelService } from 'src/app/system-common/services/label.service';

@Component({
  selector: 'sym-proposer-new',
  templateUrl: './proposer-new.component.html',
  styleUrls: ['./proposer-new.component.css']
})
export class ProposerNewComponent implements OnInit {
  @Input() model: any;
  @Input() metadata: any;
  @Input() lookups: any;

  sectionHeader = '';

  fieldCodes = ['firstname', 'lastname', 'genderCd', 'maritalStatus', 'dob', 'age', 'relationCd', 'industryCd']

  fields = [];

  constructor(private labelService: LabelService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.model.currentValue && changes.metadata.currentValue) {
      this.initFields();
    }
  }

  ngOnInit(): void {
    this.sectionHeader = this.labelService.getLabelValue('policyProposerDetails');
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
