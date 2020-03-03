import { Component, OnInit } from '@angular/core';
import { LabelService } from './system-common/services/label.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sym-app';

  constructor(private labelService: LabelService) { }

  ngOnInit() {
    this.labelService.loadLabels();
  }
}
