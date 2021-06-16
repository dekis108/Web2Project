import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device } from 'src/app/model/devices';

@Injectable({
  providedIn: 'root'
})
export class DevicesLoaderService {
  devices: Device[] = [];
  constructor(private http: HttpClient) { }

  getDevices() {
    return this.http.get('https://localhost:44356/Device/getDevices')
  }
}
