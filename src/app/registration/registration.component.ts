import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  error:string = "";
  
  registraForm = new FormGroup({

    first_name:new FormControl(null, [
      Validators.minLength(4),Validators.maxLength(10),Validators.required]),
    last_name:new FormControl(null ,[
      Validators.minLength(4),Validators.maxLength(10),Validators.required]),
    age:new FormControl(null,[
      Validators.required ,Validators.max(70),Validators.min(16)
    ]),
    email:new FormControl(null , [
      Validators.required , Validators.email
    ]),
    password:new FormControl(null ,[
      Validators.required ,Validators.minLength(8),Validators.maxLength(10)
    ]),

  })
  registraFormSubmit(form:FormGroup){
      this._authService.register(form.value).subscribe((data=>{

        if(data.message =="success"){
          this._Router.navigate(["/login"])
        }else{
          this.error = data.errors.email.message
        }
      }))
  }
  eyePass(){
    let eye:any = document.getElementById("Password");
    if(eye.type === "password"){
      eye.type = "text"
    }else{
      eye.type ="password"
    }
  }
  constructor(private _authService:AuthService , private _Router:Router) { }

  ngOnInit(): void {
  }

}
