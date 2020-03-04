import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LabelService } from 'src/app/system-common/services/label.service';
import { QuotationService } from '../services/quotation.service';
import { Quotation } from '../../models/quotation/quotation';
import { QuotationProduct } from '../../models/quotation/quotation-product';
import { QuotationParty } from '../../models/quotation/quotation-party';

@Component({
  selector: 'sym-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.css']
})
export class QuotationFormComponent implements OnInit {
  header = '';
  id: number;

  quotationResource: any = {};
  quotation: Quotation = new Quotation();
  basePlan: QuotationProduct = new QuotationProduct();
  proposer: QuotationParty = new QuotationParty();
  primaryInsured: QuotationParty = new QuotationParty();
  supplementaryList: QuotationParty[] = [];
  jointLife: QuotationParty = new QuotationParty();
  riderList: QuotationProduct[] = [];

  quotationMetadata: any;
  proposerMetadata: any;

  lookups: any;

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
          this.initModels(this.quotationResource.Models);
          this.initMetadata();
          this.lookups = this.quotationResource.Lookups;

          console.log('Get quotation successful.');
        },
        error => {
          console.log('Get quotation failed.');
          console.log('Error:', error);
        }
      );
    });
  }

  initModels(models) {
    this.quotation = models.Entity;
    this.basePlan = models.BasePlan;
    this.proposer = models.Proposer;
    this.primaryInsured = models.PrimaryInsured;
    this.supplementaryList = models.SupplementaryList;
    this.jointLife = models.JointLife;
    this.riderList = models.RiderList;
  }

  initMetadata() {
    this.quotationMetadata = this.quotationResource.Metadata[this.quotation.guid];
    this.proposerMetadata = this.quotationResource.Metadata[this.proposer.guid];
  }

}
