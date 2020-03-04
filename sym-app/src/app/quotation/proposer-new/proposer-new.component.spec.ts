import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposerNewComponent } from './proposer-new.component';

describe('ProposerNewComponent', () => {
  let component: ProposerNewComponent;
  let fixture: ComponentFixture<ProposerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
