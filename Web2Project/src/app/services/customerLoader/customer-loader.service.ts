import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/model/cusomter';

@Injectable({
  providedIn: 'root'
})
export class CustomerLoaderService {
  customers: Customer[] = [];
  constructor() { }

}
