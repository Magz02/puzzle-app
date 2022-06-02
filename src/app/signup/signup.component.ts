import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators, NgModelGroup } from '@angular/forms';
import { json, response } from 'express';
import { SignupService } from '../signup.service';

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
  hasSubmitted = false;
  showmessage = false;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient,
    private signupservice : SignupService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    //console.log(form.value);
    console.log(this.company);
    console.log(this.email.value);
    if (this.email.hasError('required')) {
      //cooles Zeug
    }

    /*let formJson = {
      email: this.email.value,
      password1: this.password1,
      password2: this.password2,
      street: this.street,
      city: this.city,
      postcode: this.postcode,
      company: this.company
    };*/

    if (this.password1 === this.password2) {
      this.signupservice.signup(this.email.value, this.password1).subscribe({
        next: b => this.showmessage = b
      });
      this.hasSubmitted = true;
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
