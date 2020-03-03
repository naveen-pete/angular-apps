import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicySearchComponent } from './policy-search.component';

describe('PolicySearchComponent', () => {
  let component: PolicySearchComponent;
  let fixture: ComponentFixture<PolicySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
