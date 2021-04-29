import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Incident} from "../../model/incident";

@Injectable({
  providedIn: 'root'
})
export class IncidentLoaderService {
  incident: Incident[] = [];
  constructor() { }

  getIncidents(): Observable<Incident[]> {
    //todo: get from backend

    //this.incident

    return of(this.incident);
  }
}
