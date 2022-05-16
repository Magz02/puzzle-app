import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email: string, password: string) : Observable<boolean> {
    console.log("It do be workin");
    return of(email === "test@test.at" && password === "12345678");
  }
}
