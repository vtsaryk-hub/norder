import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementOfCashflowsComponent } from './statement-of-cashflows.component';

describe('StatementOfCashflowsComponent', () => {
  let component: StatementOfCashflowsComponent;
  let fixture: ComponentFixture<StatementOfCashflowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementOfCashflowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementOfCashflowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
