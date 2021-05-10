import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Call } from 'src/app/model/calls';
import { _Calls } from '../incidentLoader/incidentsMock';

@Injectable({
  providedIn: 'root'
})
export class CallLoaderService {
  calls: Call[] = [];
  constructor() { }

  getDevices() :  Observable<Call[]> {
    //todo: get from backend
    this.calls = _Calls;
    return of(this.calls);
  }
}
