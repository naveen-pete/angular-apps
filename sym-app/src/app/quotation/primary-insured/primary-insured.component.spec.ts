import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryInsuredComponent } from './primary-insured.component';

describe('PrimaryInsuredComponent', () => {
  let component: PrimaryInsuredComponent;
  let fixture: ComponentFixture<PrimaryInsuredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryInsuredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
