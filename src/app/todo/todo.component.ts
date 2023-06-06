import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  constructor (public dialog:MatDialog) {}

  ngOnInit(): void {
    this.todoArray = localStorage['todos'] ? JSON.parse(localStorage.getItem("todos")!) : [];
  }

public todoItem:string = "";
public todoTime = "";
public todoDate = "";
public todoDetails:string = "";
public todoObj:object = {};
public todoArray:Array<any> = [];


addTodo(){
  this.todoObj = {Items:this.todoItem, Date:this.todoDate, Time:this.todoTime, Details:this.todoDetails}
  this.todoArray.push(this.todoObj)
 console.log(this.todoObj);
 console.log(this.todoArray);
 localStorage.setItem("todos", JSON.stringify(this.todoArray))

}
openDialog(start:any, end:any){
this.dialog.open(LoginComponent, {
  width: '300px', data:{start, end}
})
 }
}
