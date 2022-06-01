import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators, NgModelGroup } from '@angular/forms';
import { json, response } from 'express';

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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient
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
    let formJson = {
      email: this.email.value,
      password1: this.password1,
      password2: this.password2,
      street: this.street,
      city: this.city,
      postcode: this.postcode,
      company: this.company
    };
    this.http.post<any>('http://localhost:3000/signup', formJson, this.httpOptions).subscribe((responseData) => {
      console.log(responseData);
    });
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
