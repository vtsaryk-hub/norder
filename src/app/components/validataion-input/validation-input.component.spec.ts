import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidataionInputComponent } from './validation-input.component';

describe('ValidataionInputComponent', () => {
  let component: ValidataionInputComponent;
  let fixture: ComponentFixture<ValidataionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidataionInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidataionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
