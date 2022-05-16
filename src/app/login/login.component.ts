import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    //console.log(form.value);
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

  getErrorPassword() {
    if (this.password === '') {
      return 'You must enter a value';
    }
    return '';
  }

  login(email: string, password: string) : Observable<boolean> {
    console.log("It do be workin");
    return of(email == "test@test.at" && password == "12345678");
  }

}
