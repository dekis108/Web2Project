import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device } from 'src/app/model/devices';
import { Devices } from '../incidentLoader/incidentsMock';

@Injectable({
  providedIn: 'root'
})
export class DevicesLoaderService {
  devices: Device[] = [];
  constructor() { }

  getDevices() :  Observable<Device[]> {
    //todo: get from backend
    this.devices = Devices;
    return of(this.devices);
  }
}
