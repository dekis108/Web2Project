import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIncidentsWidgetComponent } from './my-incidents-widget.component';

describe('MyIncidentsWidgetComponent', () => {
  let component: MyIncidentsWidgetComponent;
  let fixture: ComponentFixture<MyIncidentsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyIncidentsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIncidentsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
