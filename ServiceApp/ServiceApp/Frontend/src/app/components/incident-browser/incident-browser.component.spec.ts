import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentBrowserComponent } from './incident-browser.component';

describe('IncidentBrowserComponent', () => {
  let component: IncidentBrowserComponent;
  let fixture: ComponentFixture<IncidentBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
