import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  public phone_no:number = 0
  public firstName:string = ""
  public email = ""
  submitForm(){
    alert("Accepted")
    console.log("Accepted");

  }
}
