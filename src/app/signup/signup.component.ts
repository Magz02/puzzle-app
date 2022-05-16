import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  username = '';
  email = new FormControl('', [Validators.required, Validators.email]);
  password1 = '';
  password2 = '';
  street = '';
  city = '';
  postcode = '';
  company = 'FH Technikum Wien';
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    //console.log(form.value);
    console.log(this.company);
    console.log(this.email.value);
    if (this.email.hasError('required')) {
      //cooles Zeug
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

  return this.email.invalid ? 'Not a valid email' : '';
  /*return condition ? 'is true' : 'is false';
  
  /*if (this.email.hasError('email')) {
    return 'Not a valid email';
  } else {
    return '';
  }*/
  }

}
