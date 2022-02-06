import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllReportComponent } from './view-all-report.component';

describe('ViewAllReportComponent', () => {
  let component: ViewAllReportComponent;
  let fixture: ComponentFixture<ViewAllReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
