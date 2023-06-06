import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'first-angular';
  public name = "toheeb";
  private num = 4;
  protected food = "rice";
  public myName:string = "janet"
  public numb:number = 50;
  public students:Array<any> = ["janet", "segun", 5, {name:"joy"}, false]
  public allStudents:Object ={name:"joy", school:"sqi", age: 10};
  public studentDetails:Array<any> = [
    {id:10, name:"joy", school:"sqi", age: 10},
    {id:11, name:"sola", school:"sqi", age: 12}
  ]
  public user = "segun";
  getUser(){
    console.log(typeof(this.user));
    this.numb = 70;
    
  }
}
