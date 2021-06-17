import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BasicInformation } from 'src/app/model/basicInformation';
import {Incident} from "../../model/incident";

@Injectable({
  providedIn: 'root'
})
export class IncidentLoaderService {
  incidents: Incident[] = [];
  basicInfo: BasicInformation[] = [];
  constructor(private http: HttpClient) { }


  getBasicInfo()  {
    return this.http.get('https://localhost:44356/Incident/getIncidentBasicInfo')
  }

  getIncidentWidgetInfo() {
    return this.http.get('https://localhost:44356/Incident/getIncidentWidgetInfo')
  }
}
