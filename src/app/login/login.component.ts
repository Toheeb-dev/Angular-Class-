import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor (
    public toLogin: Router,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>
    ) {}
  ngOnInit(): void {
    this.userArray = localStorage['students'] ? JSON.parse(localStorage.getItem("students")!) : [];
  }
  public firstname:string = "";
  public pass:any = "";
  public userArray:Array<any> = []
  public onlineArray:Array<any> = []
  public loginForm = this.formBuilder.group({
    email:["", [Validators.required, Validators.email]],
    password:["", [Validators.required, Validators.minLength(6)]]
  })
  signIn(){
    let onlineArray = this.userArray.find((post:any, index:number)=>this.firstname == post.dept && this.pass == post.password)
    console.log(onlineArray);
    if(onlineArray.length != 0){
    localStorage.setItem("user", JSON.stringify(onlineArray))
      this.toLogin.navigate(["/dashboard"])
    } else{
      alert("Incorrect password")
    }

  }
}
