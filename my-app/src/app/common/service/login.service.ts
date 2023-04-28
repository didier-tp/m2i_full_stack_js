import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginRequest } from '../data/login-request';
import { LoginResponse } from '../data/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  public postLogin$(loginRequest : LoginRequest) : Observable < LoginResponse > {
    sessionStorage.setItem("token","");
    let url="http://localhost:8282/login-api/public/auth";
    return this.http.post<LoginResponse>(url,loginRequest).pipe(
      tap((loginResponse)=>{this.memoriserJeton(loginResponse)})
    )
  }

  memoriserJeton(loginResponse : LoginResponse){
    console.log("loginResponse=" + JSON.stringify(loginResponse));
    sessionStorage.setItem("token",loginResponse.token);
  }

}
