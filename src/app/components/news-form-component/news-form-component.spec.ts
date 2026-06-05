import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFormComponents } from './news-form-component';

describe('NewsFormComponents', () => {
  let component: NewsFormComponents;
  let fixture: ComponentFixture<NewsFormComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsFormComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsFormComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
