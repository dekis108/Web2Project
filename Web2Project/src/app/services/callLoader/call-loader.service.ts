import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Call } from 'src/app/model/calls';

@Injectable({
  providedIn: 'root'
})
export class CallLoaderService {
  calls: Call[] = [];
  constructor(private http: HttpClient) { }


  //[Route("AddCall/{id}/{comment}/{customerId}/{malfunctionName}/{priority}/{reason}")]
  postCall(call: Call) {
    return this.http.post('https://localhost:44356/Call/AddCall/' +call.id + '/'  + call.comment + '/'+ call.customerId + '/'+ call.malfunction.name + '/'+
       call.malfunction.priority + '/'+ call.reason + '/', null);

  }

  getCallsFromDevice(ids: string) {
    return this.http.get('https://localhost:44356/Call/GetCallsFromDevice/' + ids);
  }
}
