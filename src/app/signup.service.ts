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
    return this.http.post<any>('http://localhost:3000/signup', { email: email, password: password }, this.httpOptions);
  }
}
