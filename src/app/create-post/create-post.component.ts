import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  constructor (private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.postArray = localStorage['allPosts'] ? JSON.parse(localStorage.getItem("allPosts")!) : [];
    this.user = localStorage['user'] ? JSON.parse(localStorage.getItem("user")!) : [];

  }
  public title:string = "";
  public body:string = "";
  public user:object = {};
  postObj:object = {};
  postArray:Array<any>= []
  getArray:Array<any>= []

public postForm = this.formBuilder.group({
  postTitle:["", [Validators.required]],
  postBody:["", [Validators.required, Validators.minLength(15), Validators.maxLength(500)]]
})
  createPost(){
    console.log(this.postForm.value);
    this.postObj = {title: this.title, body:this.body, OnlineUser: this.user}
    this.postArray.push(this.postObj)
    localStorage.setItem("allPosts", JSON.stringify(this.postArray))
    this.getArray = JSON.parse(localStorage.getItem("students")!)
    console.log(this.getArray);

  }
}
