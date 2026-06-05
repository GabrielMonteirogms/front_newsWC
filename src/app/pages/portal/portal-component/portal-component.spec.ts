import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalComponents } from './portal-component';

describe('PortalComponents', () => {
  let component: PortalComponents;
  let fixture: ComponentFixture<PortalComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortalComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(PortalComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
