import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/model/cusomter';

@Injectable({
  providedIn: 'root'
})
export class CustomerLoaderService {
  customers: Customer[] = [];
  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get('https://localhost:44356/UserData/getCustomers');
  }

}
