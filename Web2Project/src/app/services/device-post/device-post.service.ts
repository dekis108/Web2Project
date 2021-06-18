import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DevicePost } from 'src/app/model/devices';

@Injectable({
  providedIn: 'root'
})
export class DevicePostService {


  constructor(private http: HttpClient) { }

    //[Route("AddDevice/{name}/{address}/{coordinates}/{type}/{priority}")]
    postDevice(dev: DevicePost) {
      return this.http.put('https://localhost:44356/Device/AddDevice/' + dev.name + '/'+ dev.address + '/'+ dev.coordinates + '/'+ dev.type
         + '/'+ dev.priority, null);
  
    }
}
