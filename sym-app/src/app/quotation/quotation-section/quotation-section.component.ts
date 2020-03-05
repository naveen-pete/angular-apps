import { Component, Input, OnInit } from '@angular/core';
import { LabelService } from 'src/app/system-common/services/label.service';

@Component({
  selector: 'sym-quotation-section',
  templateUrl: './quotation-section.component.html',
  styleUrls: ['./quotation-section.component.css']
})
export class QuotationSectionComponent implements OnInit {
  @Input() sectionHeaderKey: string;
  @Input() show: boolean;

  sectionHeader = '';

  constructor(private labelService: LabelService) { }

  ngOnInit(): void {
    this.sectionHeader = this.labelService.getLabelValue(this.sectionHeaderKey);
  }

  toggleShow() {
    this.show = !this.show;
  }
}
