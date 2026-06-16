import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumsComponent } from './stadiums';

describe('Stadiums', () => {
  let component: StadiumsComponent;
  let fixture: ComponentFixture<StadiumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StadiumsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StadiumsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
