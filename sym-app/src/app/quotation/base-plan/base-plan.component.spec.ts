import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePlanComponent } from './base-plan.component';

describe('BasePlanComponent', () => {
  let component: BasePlanComponent;
  let fixture: ComponentFixture<BasePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
