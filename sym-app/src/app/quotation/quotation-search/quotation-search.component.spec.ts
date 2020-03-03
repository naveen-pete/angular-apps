import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationSearchComponent } from './quotation-search.component';

describe('QuotationSearchComponent', () => {
  let component: QuotationSearchComponent;
  let fixture: ComponentFixture<QuotationSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
