import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  signup(email: string, password: string) : Observable<boolean> {
    console.log("signupservice works");
    console.log("Email in signup: " + email);
    console.log("Password in signup: " + password);
    return this.http.post<boolean>('http://localhost:3000/signup', { username: email, password: password }, this.httpOptions);
  }
}