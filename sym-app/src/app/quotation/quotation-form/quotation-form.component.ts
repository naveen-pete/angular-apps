import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LabelService } from '../../system-common/services/label.service';
import { QuotationService } from '../services/quotation.service';
import { SectionData } from '../../models/quotation/section-data';

@Component({
  selector: 'sym-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.css']
})
export class QuotationFormComponent implements OnInit {
  id: number;

  header = '';

  quotationResource: any = {};

  lookups: any;
  basicDetailData: SectionData;
  basePlanData: SectionData;
  proposerData: SectionData;
  primaryInsuredData: SectionData;

  constructor(
    private labelService: LabelService,
    private quotationService: QuotationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.header = this.labelService.getLabelValue('AddQuotation');

    this.route.paramMap.subscribe(map => {
      this.id = +map.get('id');
      this.quotationService.getQuotation(this.id).subscribe(
        quotations => {
          this.quotationResource = quotations[0];
          this.initLookups();
          this.initSectionData();

          console.log('Get quotation successful.');
        },
        error => {
          console.log('Get quotation failed.');
          console.log('Error:', error);
        }
      );
    });
  }

  initSectionData() {
    this.basicDetailData = this.getSectionData('Entity');
    this.basePlanData = this.getSectionData('BasePlan');
    this.proposerData = this.getSectionData('Proposer');
    this.primaryInsuredData = this.getSectionData('PrimaryInsured');
  }

  getSectionData(field: string): SectionData {
    const model = this.quotationResource.Models[field];
    return {
      model,
      metadata: this.quotationResource.Metadata[model.guid]
    };
  }

  initLookups() {
    this.lookups = this.quotationResource.Lookups;
  }

  initModels(models) {
    // this.quotation = models.Entity;
    // this.basePlan = models.BasePlan;
    // this.proposer = models.Proposer;
    // this.primaryInsured = models.PrimaryInsured;
    // this.supplementaryList = models.SupplementaryList;
    // this.jointLife = models.JointLife;
    // this.riderList = models.RiderList;
  }

  initMetadata() {
    // this.quotationMetadata = this.quotationResource.Metadata[this.quotation.guid];
    // this.proposerMetadata = this.quotationResource.Metadata[this.proposer.guid];
  }

}
