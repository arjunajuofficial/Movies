import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  d_email = 'admin@gmail.com';
  d_pass  = 'admin';
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private router: Router,private loginService:LoginService) { 
    
  }

  ngOnInit(): void {
    
  }

  login(){
    let email = this.email.value;
    let pass = this.password.value;
    if(email === this.d_email && pass === this.d_pass )
    {
      this.loginService.login_status = true;
      this.router.navigate(['home']);
    }
   // console.log(this.email.get(value));
    //console.log(this.email.value);
    //console.log(this.password.value);
    //console.log(this.credentials);
    
  }

}
