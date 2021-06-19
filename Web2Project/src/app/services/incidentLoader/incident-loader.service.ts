import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BasicInformation } from 'src/app/model/basicInformation';
import { Resolution } from 'src/app/model/resolution';
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

  //[Route("AddDeviceToIncident/{incidentId}/{deviceIds}")]
  postDeviceToIncident(incidentId : string, deviceIds : string) {
    return this.http.post('https://localhost:44356/Incident/AddDeviceToIncident/' + incidentId + '/' + deviceIds , null);
  }

  // [Route("AddIncident/{id}/{voltage}/{scheduledTime}/{affectedCustomers}/{ata}/{eta}/{etr}/{confirmed}
  // /{selfAssigned}/{incidentStatus/{outageTime}/{priority}/{incidentType}/{cause}/{subcause}/{material}/{constructionType}")]

  postIncident(basicInfo : BasicInformation, resolution : Resolution) {
    return this.http.post('https://localhost:44356/Incident/AddIncident/' + basicInfo.id  + '/' + basicInfo.voltage  + '/'+ basicInfo.scheduledTime  + '/'+
     basicInfo.affectedCustomers  + '/'+ basicInfo.ATA  + '/'+ basicInfo.ETA  + '/'+ basicInfo.ETR  + '/'+ basicInfo.confirmed  + '/' + basicInfo.selfAssign  + '/'+ basicInfo.status 
      + '/'+ basicInfo.outageTime  + '/'+ basicInfo.priority  + '/' + basicInfo.type  + '/'+ resolution.cause  + '/'+ resolution.subcause  + 
      '/'+ resolution.material  + '/'+ resolution.constructionType  + '/', null);

  }

  //[Route("AddCallsToIncident/{incidentId}/{callId}")]
  postCallsToIncident(incidentId : string, callIds : string) {
    return this.http.post('https://localhost:44356/Incident/AddCallsToIncident/' + incidentId + '/' + callIds , null);
  }

  getNumCalls(incidentId: string)  {
    console.log("!!!getNumCalls" + incidentId);
    return this.http.post('https://localhost:44356/Incident/getNumCalls/' + incidentId, null)
  }


}
