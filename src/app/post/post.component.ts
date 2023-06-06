import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public routeId:any
  public post:any
  public user: any
constructor (
  private actRoute: ActivatedRoute
){}
ngOnInit(): void{
this.routeId = this.actRoute.snapshot.params["id"];
console.log(this.routeId);
let postArray = JSON.parse(localStorage["allPosts"]);
let postUser = JSON.parse(localStorage["user"]);
console.log(postUser);

this.post = postArray.find((post:any, index:number)=> index == this.routeId)
this.user = postUser.find((item:any, index:number)=> item.firstName == this.post.OnlineUser)

}
}
