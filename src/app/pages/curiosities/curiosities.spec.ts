import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriositiesComponent } from './curiosities';

describe('Curiosities', () => {
  let component: CuriositiesComponent;
  let fixture: ComponentFixture<CuriositiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuriositiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CuriositiesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
