import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteTransactionComponent } from './write-transaction.component';

describe('WriteTransactionComponent', () => {
  let component: WriteTransactionComponent;
  let fixture: ComponentFixture<WriteTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
