import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindReportComponent } from './find-report.component';

describe('FindReportComponent', () => {
  let component: FindReportComponent;
  let fixture: ComponentFixture<FindReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
