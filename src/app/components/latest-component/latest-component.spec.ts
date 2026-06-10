import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestComponent } from './latest-component';

describe('LatestComponent', () => {
  let component: LatestComponent;
  let fixture: ComponentFixture<LatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LatestComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
