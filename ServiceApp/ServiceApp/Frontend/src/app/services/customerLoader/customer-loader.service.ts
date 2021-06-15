import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/model/cusomter';
import { Customers } from '../incidentLoader/incidentsMock';

@Injectable({
  providedIn: 'root'
})
export class CustomerLoaderService {
  customers: Customer[] = [];
  constructor() { }

  getCustomers() :  Observable<Customer[]> {
    //todo: get from backend
    this.customers = Customers;
    return of(this.customers);
  }
}
