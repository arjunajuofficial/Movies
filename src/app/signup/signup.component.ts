import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  hide = true;
  fname = new FormControl('', [Validators.required]);
  lname = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor() {}

  ngOnInit(): void {}

  signup(){

    // let finaldata = {
    //   'fname': this.fname.value,
    //   'lname': this.lname.value,
    //   'email': this.email.value,
    //   'password': this.password.value
    // }
    // console.log(finaldata);

  }
}
