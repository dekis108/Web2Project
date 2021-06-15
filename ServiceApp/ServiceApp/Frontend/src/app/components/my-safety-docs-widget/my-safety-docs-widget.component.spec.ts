import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySafetyDocsWidgetComponent } from './my-safety-docs-widget.component';

describe('MySafetyDocsWidgetComponent', () => {
  let component: MySafetyDocsWidgetComponent;
  let fixture: ComponentFixture<MySafetyDocsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySafetyDocsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySafetyDocsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
