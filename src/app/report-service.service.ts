import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { report } from './IReport';
import { IRequestData } from './IRequestData';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  constructor(private http:HttpClient) { }

  getReportForPeriod(requestData:IRequestData):Observable<report>{
    // const reportUrl = "http://localhost:1111/report/generate";
    return this.http.post<report>("http://localhost:1111/report/generate", requestData);

  }
}
