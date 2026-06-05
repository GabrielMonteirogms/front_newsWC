import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedNewsComponents } from './featured-news-components';

describe('FeaturedNewsComponents', () => {
  let component: FeaturedNewsComponents;
  let fixture: ComponentFixture<FeaturedNewsComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedNewsComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedNewsComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
