import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  validateLogin() : boolean {
    //todo: if form is valid && email&password match from back
    return true;
  }
}
