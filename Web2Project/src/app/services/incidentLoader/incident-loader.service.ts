import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BasicInformation } from 'src/app/model/basicInformation';
import {Incident} from "../../model/incident";
import { Incidents,BInfo } from './incidentsMock';

@Injectable({
  providedIn: 'root'
})
export class IncidentLoaderService {
  incidents: Incident[] = [];
  basicInfo: BasicInformation[] = [];
  constructor() { }

  getIncidents(): Observable<Incident[]> {
    //todo: get from backend
    this.incidents = Incidents;
    return of(this.incidents);
  }

  getBasicInfo() : Observable<BasicInformation[]> {
    //todo: get from backend
    this.basicInfo = BInfo;
    return of(this.basicInfo);
  }
}
