import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit{
  constructor (
    public rout: Router,
    private formBuilder : FormBuilder) {}
  ngOnInit(): void {
    this.userArray = localStorage['students'] ? JSON.parse(localStorage.getItem("students")!) : [];
  }
  public userForm = this.formBuilder.group({
    lastName : ["", [Validators.required, Validators.minLength(4)]],
    firstName : ["", [Validators.required, Validators.minLength(4)]],
    email : ["", [Validators.required, Validators.email]],
    pass : ["", [Validators.required, Validators.minLength(6)]]
  })
  public firstname:string ="";
  public lastname:string ="";
  public dept:string ="";
  public password:string ="";
  public userDetails:Object = {};
  public userArray:Array<any> = []

  submitUserForm(){
    console.log(this.userForm);
    this.userDetails = {firstName:this.firstname, lastName:this.lastname, dept:this.dept, password:this.password}
    this.userArray.push(this.userDetails)
    console.log(this.userDetails);
    console.log(this.userArray);
    localStorage.setItem("students", JSON.stringify(this.userArray))
    this.rout.navigate(["/login"])

  }
}
