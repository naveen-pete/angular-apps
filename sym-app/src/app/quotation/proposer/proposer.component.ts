import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LabelService } from 'src/app/system-common/services/label.service';
import { QuotationParty } from 'src/app/models/quotation/quotation-party';

@Component({
  selector: 'sym-proposer',
  templateUrl: './proposer.component.html',
  styleUrls: ['./proposer.component.css']
})
export class ProposerComponent implements OnInit, OnChanges {
  @Input() model: QuotationParty;
  @Input() metadata: any;

  sectionHeader = '';

  firstNameLabel = '';
  lastNameLabel = '';
  genderLabel = '';
  maritalStatusLabel = '';
  dobLabel = '';
  ageLabel = '';
  relationLabel = '';
  industryLabel = ''

  constructor(private labelService: LabelService) { }

  ngOnInit(): void {
    this.sectionHeader = this.labelService.getLabelValue('policyProposerDetails');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initLabels(changes.metadata.currentValue);
  }

  initLabels(metadata) {
    if (metadata) {
      this.firstNameLabel = this.labelService.getLabelValue(metadata.firstname.LABELKEY);
      this.lastNameLabel = this.labelService.getLabelValue(metadata.lastname.LABELKEY);
      this.genderLabel = this.labelService.getLabelValue(metadata.genderCd.LABELKEY);
      this.maritalStatusLabel = this.labelService.getLabelValue(metadata.maritalStatus.LABELKEY);
      this.dobLabel = this.labelService.getLabelValue(metadata.dob.LABELKEY);
      this.ageLabel = this.labelService.getLabelValue(metadata.age.LABELKEY);
      this.relationLabel = this.labelService.getLabelValue(metadata.relationCd.LABELKEY);
      this.industryLabel = this.labelService.getLabelValue(metadata.industryCd.LABELKEY);
    } else {
      console.log('Proposer metadata is not initialized');
    }
  }
}
