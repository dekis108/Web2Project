import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private passwordRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

  loginForm =  new FormGroup({
    email:  new FormControl('eg. aaaa.bbb@123.com', [Validators.required, Validators.minLength(3), Validators.maxLength(100),Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(36) , Validators.pattern(this.passwordRegex)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    //todo: talk with service
    console.log(this.loginForm.value);
  }
}
