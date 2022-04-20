import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  login(){
   // console.log(this.email.get(value));
    //console.log(this.email.value);
    //console.log(this.password.value);
    //console.log(this.credentials);
    
  }

}
