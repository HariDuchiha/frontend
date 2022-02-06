import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindReportComponent } from './find-report/find-report.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  // {path : 'findReport', component: FindReportComponent},
  // {path : 'generateReport', component : ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponent = [FindReportComponent]
