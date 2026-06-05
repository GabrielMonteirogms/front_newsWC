import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardComponents } from './news-card-component';

describe('NewsCardComponents', () => {
  let component: NewsCardComponents;
  let fixture: ComponentFixture<NewsCardComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsCardComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsCardComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
