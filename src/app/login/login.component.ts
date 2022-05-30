import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = '';
  showmessage = false;
  hasSubmitted = false;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private loginservice : LoginService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.email.value);
    console.log(this.password);
    console.log(this.hasSubmitted);
    this.loginservice.login(this.email.value, this.password).subscribe({
      next : b => this.showmessage = b
    });
    this.hasSubmitted = true;
    //idk what should be the second argument  * doesn't work *
    this.http.post<{ message: string }>('http://localhost:3000/login', this.loginservice, this.httpOptions).subscribe((responseData) =>{
      console.log(responseData.message);
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

  return this.email.invalid ? 'Not a valid email' : '';

  }

  getErrorPassword() {
    if (this.password === '') {
      return 'You must enter a value';
    }
    return '';
  }

}
