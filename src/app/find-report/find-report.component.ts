import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-find-report',
  templateUrl: './find-report.component.html',
  styleUrls: ['./find-report.component.css']
})
export class FindReportComponent implements OnInit {

  // @ViewChild('htmlData') htmlData:ElementRef;
  
  reportObj:any;
  list: any;
  reportDetailsList:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  
  displayReport(form: any){
    const url = "http://localhost:8484/report/fetchreport/"+form.value.reportId;
    this.http.get(url)
      .subscribe(response => {
        console.log(response);
      this.reportObj = response;
      console.log(this.reportObj);

      })

    }

    // showTableDetails(){
    //   if(this.showMe = true){
    //     this.showMe = false;
    //     console.log(this.showMe);
    //   }
    //   this.showMe = true;
    // }

    // public openPDF():void {
    //   let DATA = document.getElementById('htmlData');
        
    //   html2canvas(DATA).then(canvas => {
          
    //       let fileWidth = 208;
    //       let fileHeight = canvas.height * fileWidth / canvas.width;
          
    //       const FILEURI = canvas.toDataURL('image/png')
    //       let PDF = new jsPDF('p', 'mm', 'a4');
    //       let position = 0;
    //       PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
          
    //       PDF.save('angular-demo.pdf');
    //   });     
    // }
    
}