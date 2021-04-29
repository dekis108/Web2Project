import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteConfigLoadEnd, Router  } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

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

  showErorrLabel = false;

  constructor(private loginService: LoginService, private router: Router,) { }

  ngOnInit(): void {
  }

  

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginService.validateLogin()) {
      this.showErorrLabel = false;
      console.log("True");
      //todo: set user as logged in from back and  goto dashboard
      this.router.navigate(["/dashboard"]);
    }
    else {
      this.showErorrLabel = true;
      console.log("False");
    }
  }
}
