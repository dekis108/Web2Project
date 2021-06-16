import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceBrowserComponent } from './device-browser.component';

describe('DeviceBrowserComponent', () => {
  let component: DeviceBrowserComponent;
  let fixture: ComponentFixture<DeviceBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
