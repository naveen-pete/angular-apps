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

  sectionHeader = '';

  quotationRefNumLabel = '';
  quotationDateLabel = '';
  agentBranchLabel = '';

  constructor(private labelService: LabelService) { }

  ngOnInit(): void {
    this.sectionHeader = this.labelService.getLabelValue('basicDetails');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initLabels(changes.metadata.currentValue);
  }

  initLabels(metadata) {
    if (metadata) {
      this.quotationRefNumLabel = this.labelService.getLabelValue(metadata.quotationRefNum.LABELKEY);
      this.quotationDateLabel = this.labelService.getLabelValue(metadata.quotationDt.LABELKEY);
    } else {
      console.log('Quotation metadata is not initialized');
    }
  }
}
