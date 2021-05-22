import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTopBarComponent } from './auth-top-bar.component';

describe('AuthTopBarComponent', () => {
  let component: AuthTopBarComponent;
  let fixture: ComponentFixture<AuthTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthTopBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
