import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FieldItem } from '../models/field-item';

@Component({
  selector: 'app-field-group',
  templateUrl: './field-group.component.html',
  styleUrls: ['./field-group.component.css']
})
export class FieldGroupComponent implements OnInit {
  @Input('fieldKeys') fieldKeysAsString: string = '';
  @Output() fieldChange = new EventEmitter<FieldItem>();

  fieldItems: FieldItem[] = [];

  private fieldLookup = [
    { key: 'firstname', label: 'First Name' },
    { key: 'lastname', label: 'Last Name' },
    { key: 'dob', label: 'Date of Birth' },
    { key: 'age', label: 'Age' }
  ]

  constructor() { }

  ngOnInit(): void {
    this.initFields()
  }

  private initFields() {
    if (this.fieldKeysAsString) {
      const fieldKeys = this.fieldKeysAsString.split(',');
      this.fieldItems = fieldKeys.map(key => this.createField(key.trim()));
    }
  }

  private createField(key: string): FieldItem {
    const field = this.fieldLookup.find(f => f.key === key);

    return {
      key: field.key,
      label: field.label
    };
  }

  onChange(event: any) {
    const { id, value } = event.target;
    const fieldItem = this.fieldItems.find(item => item.key === id);
    fieldItem.value = value;

    this.fieldChange.emit(fieldItem);
  }

}
