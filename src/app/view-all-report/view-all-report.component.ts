import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ExportAsService, ExportAsConfig} from 'ngx-export-as'
import jspdf, { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-view-all-report',
  templateUrl: './view-all-report.component.html',
  styleUrls: ['./view-all-report.component.css']
})
export class ViewAllReportComponent implements OnInit {

  //  @ViewChild('htmlData', {static: false}) el!: ElementRef;
 
  reportObj:any;
  list: any;
  reportDetailsList:any;
  page:Number=1;
  reportType:any;
  data: any;


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  viewAllReport(){
    const url = "http://localhost:8484/report/findAll";
    this.http.get(url)
      .subscribe(response => {
        console.log(response);
      this.reportObj = response;
      console.log(this.reportObj.reportDetailsList);
      this.data = this.reportObj.reportDetailsList;
      // console.log(this.reportObj);
      });

    }
  
    // downloadPDF(){
    //   let pdf = new jsPDF('p','pt','a4');
    //   pdf.html(this.el.nativeElement,{
    //     callback: (pdf) =>{
    //       pdf.save("Report Details.pdf");
    //     }
    //   });

    // }

    exportAsConfig : ExportAsConfig = {
      type: 'png',
      elementIdOrContent: 'element',
    }

    downloadPDF(){
      var element = document.getElementById('htmlData')!;

      html2canvas(element).then((canvas) => {
        console.log(canvas);
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('l', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('Report.pdf');

    }).catch((error)=>console.log(error)
    );
  }

  // Search(){
  //   if(this.reportType == "")
  //   {
  //     this.viewAllReport();
  //   }
  //   else{
  //     this.reportObj = this.data.filter((res: { reportDetailsList: { reportType: string; }; }): any =>{
  //       return res.reportDetailsList.reportId.toLocaleLowerCase().match(this.reportType);
  //     })
  //   }
  // }
}
