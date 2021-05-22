import {TestBed} from '@angular/core/testing';

import {NotEmailVerifiedGuard} from './not-email-verified.guard';

describe('NotEmailVerifiedGuardGuard', () => {
  let guard: NotEmailVerifiedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotEmailVerifiedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
