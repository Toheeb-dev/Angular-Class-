import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor (public rout: Router) {}
  ngOnInit(): void {
    this.postArray = localStorage['allPosts'] ? JSON.parse(localStorage.getItem("allPosts")!) : [];
  }
  public comments:string = "";
  public allComments:Array<any> = []
  public commentObj:object = {}
  addComment(){
    this.commentObj = {comment:this.comments}
    this.allComments.push(this.commentObj)
    localStorage.setItem("commentStore", JSON.stringify(this.allComments))
  }
  showComment(){
    this.rout.navigate(["/comments"])
  }
  public postArray:Array<any> = []
  deletePost(id:number){
    this.postArray = this.postArray.filter((post, index)=>index!= id)
    localStorage.setItem("allPosts", JSON.stringify(this.postArray))
  }

}
