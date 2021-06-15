import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDocumentsComponent } from './security-documents.component';

describe('SecurityDocumentsComponent', () => {
  let component: SecurityDocumentsComponent;
  let fixture: ComponentFixture<SecurityDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
