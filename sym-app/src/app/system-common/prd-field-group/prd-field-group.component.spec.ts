import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdFieldGroupComponent } from './prd-field-group.component';

describe('PrdFieldGroupComponent', () => {
  let component: PrdFieldGroupComponent;
  let fixture: ComponentFixture<PrdFieldGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrdFieldGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrdFieldGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
