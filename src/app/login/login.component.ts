import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
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
  
  constructor(
    private loginservice : LoginService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.email.value);
    console.log(this.password);
    console.log(this.hasSubmitted);
    this.loginservice.login(this.email.value, this.password).subscribe({
      next: credentials => {
          console.log(credentials);
          this.showmessage = true;
          console.log(credentials.token);
          localStorage.setItem('token', credentials.token);
          console.log(credentials.username)
          localStorage.setItem('username', credentials.username);
        }
    });
    this.hasSubmitted = true;
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
