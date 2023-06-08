import { ApiCallsComponent } from './api-calls/api-calls.component';
import { ReativeFormsComponent } from './reative-forms/reative-forms.component';
import { CommentsComponent } from './comments/comments.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { TodoComponent } from './todo/todo.component';
import { FormsComponent } from './forms/forms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HooksComponent } from './hooks/hooks.component';

const routes: Routes = [
  {path:"", redirectTo:"signup", pathMatch:"full"},
  {path:"dashboard", children: [
    {path:"", component: DashboardComponent},
    {path:"post/:id", component: PostComponent}
  ]},
  {path:"signup", component:FormsComponent, title:"sign-up"},
  {path:"TodoApp", component:TodoComponent, title:"Todo-App"},
  {path:"create/post", component:CreatePostComponent, title:"create post"},
  {path:"login", component:LoginComponent, title:"sign-in"},
  {path:"comments", component:CommentsComponent, title:"allComment"},
  {path:"templateDriven", component:TemplateDrivenComponent, title:"TemplateDriven"},
  {path:"reactiveForm", component:ReativeFormsComponent, title:"Reactive Forms"},
  {path:"apiCalls", component:ApiCallsComponent, title:"apiCalls Services"},
  {path:"hooks", component:HooksComponent, title:"hooks lifecycle"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
