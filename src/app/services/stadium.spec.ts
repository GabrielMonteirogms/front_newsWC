import { TestBed } from '@angular/core/testing';

import { Stadium } from './stadium';

describe('Stadium', () => {
  let service: Stadium;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Stadium);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
