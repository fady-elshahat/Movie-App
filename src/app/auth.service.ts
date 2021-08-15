import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) {

    if (localStorage.getItem("userToken") != null) {
      this.saveCurrentUser()
    }
  }
  currentUesr = new BehaviorSubject(null);
  saveCurrentUser(){
    let token:any = localStorage.getItem("userToken")
    this.currentUesr.next(jwtDecode(token))
    jwtDecode(token);
    
  }
  register(formData:any):Observable<any>{
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup",formData)
  }
  login(formData:any):Observable<any>{
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin",formData)
  }
  loguot(){
    this.currentUesr.next(null);
    localStorage.removeItem("userToken");
    this._Router.navigate(["/main"])
  }
}


