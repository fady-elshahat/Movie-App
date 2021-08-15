import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:string = "";

  loginForm = new FormGroup({
    email:new FormControl(null , [
      Validators.required , Validators.email
    ]),
    password:new FormControl(null ,[
      Validators.required ,Validators.minLength(8),Validators.maxLength(10)
    ]),
  })

  loginFormSubmit(form:FormGroup){
    this._authService.login(form.value).subscribe((data=>{

      if(data.message == "success"){

        localStorage.setItem( "userToken", data.token);
        this._authService.saveCurrentUser()
        this._Router.navigate(["/home"])

      }else{
        this.error = data.message
      }
    }))
}

  eyePass(){
    let eye:any = document.getElementById("passwordLogin");
    if(eye.type === "password"){
      eye.type = "text"
    }else{
      eye.type ="password"
    }
  }
  constructor(private _authService:AuthService ,private _Router:Router) { }

  ngOnInit(): void {
  }

}
