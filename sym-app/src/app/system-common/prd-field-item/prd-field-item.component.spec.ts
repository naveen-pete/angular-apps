import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdFieldItemComponent } from './prd-field-item.component';

describe('PrdFieldItemComponent', () => {
  let component: PrdFieldItemComponent;
  let fixture: ComponentFixture<PrdFieldItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrdFieldItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrdFieldItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
