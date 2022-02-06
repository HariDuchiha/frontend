import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { report } from '../IReport';
import { IRequestData } from '../IRequestData';
import { ReportServiceService } from '../report-service.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {
  reportObj:any;
  list = [];
  reportDetailsList:any;
  constructor(private http : HttpClient){
     
}
 
  ngOnInit(): void {
  }

getReport(form: any){
  this.http.post("http://localhost:8484/report/generate", {startDate:form.value.startDate, endDate:form.value.endDate})
    .subscribe(response => {
      console.log(response);
      this.reportObj = response;
      this.list=this.reportObj.reportDetailsList;
       console.log(this.list);
    });

    
}















  // message:any;
  // //list: Array<report>;
  // constructor(private service:ReportServiceService) {}
   

  // ngOnInit(): void {
    
  // }


  // getReport(form:any){
  //   let newReport = {startDate:form.value.startDate, endDate:form.value.endDate};
  //   this.service.getReportForPeriod(newReport).subscribe((data) =>{
      
  //     console.log(data);
  //     this.message=data;
  //     console.log(this.message);
  //    console.log(data.reportDetailsList);
    
  //   });


}

