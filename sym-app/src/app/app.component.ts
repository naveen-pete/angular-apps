import { Component, OnInit } from '@angular/core';
import { LabelService } from './system-common/services/label.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  resourcesLoaded = false;

  constructor(private labelService: LabelService) { }

  ngOnInit() {
    this.labelService.loadLabels().subscribe(
      () => {
        this.resourcesLoaded = true;
        console.log('Load labels successful.');
      },
      error => {
        console.log('Load labels failed.');
        console.log('Error:', error);
      }
    );
  }
}
