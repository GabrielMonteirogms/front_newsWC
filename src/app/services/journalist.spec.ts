import { TestBed } from '@angular/core/testing';

import { Journalist } from './journalist';

describe('Journalist', () => {
  let service: Journalist;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Journalist);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
