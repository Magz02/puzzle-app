import { HttpClient, HttpHeaders } from '@angular/common/http';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(email: string, password: string) : Observable<boolean> {
    console.log("It do be workin");
    //idk what should be the second argument  * doesn't work * - Altenhofer macht form.value
    return this.http.post<any>('http://localhost:3000/login', { email: email, password: password }, this.httpOptions);
  }
}
