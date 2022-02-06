import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { RouterModule } from '@angular/router';
import { FindReportComponent } from './find-report/find-report.component';
import { ViewAllReportComponent } from './view-all-report/view-all-report.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    FindReportComponent,
    ViewAllReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SiteFrameworkModule,
    RouterModule.forRoot([
      {path:'findReport', component: FindReportComponent },
      {path:'generateReport', component: ReportComponent},
      {path:'viewAllReport', component: ViewAllReportComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
