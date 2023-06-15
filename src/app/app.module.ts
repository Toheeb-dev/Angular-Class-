import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { CommentsComponent } from './comments/comments.component';
import { ReativeFormsComponent } from './reative-forms/reative-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhoneValidatorDirective } from './directives/phone-validator.directive';
import { ApiCallsComponent } from './api-calls/api-calls.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TemplaceRefComponent } from './templace-ref/templace-ref.component';
import { NamelistComponent } from './namelist/namelist.component';
import { VeiwChildComponent } from './veiw-child/veiw-child.component';
import { DemoComponent } from './demo/demo.component';
import { HooksComponent } from './hooks/hooks.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { SetBackgroundDirective } from './customDirectives/set-background.directive';
import { HighlightDirective } from './customDirectives/highlight.directive';
import { HostListenDirective } from './customDirectives/host-listen.directive';
import { HostbiddingDirective } from './customDirectives/hostbidding.directive';
import { AppClassDirective } from './customDirectives/app-class.directive';
import { CondDirDirective } from './customDirectives/cond-dir.directive';
import { StyleDirective } from './customDirectives/style.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TodoComponent,
    DashboardComponent,
    CreatePostComponent,
    LoginComponent,
    PostComponent,
    TemplateDrivenComponent,
    CommentsComponent,
    ReativeFormsComponent,
    PhoneValidatorDirective,
    ApiCallsComponent,
    TemplaceRefComponent,
    NamelistComponent,
    VeiwChildComponent,
    DemoComponent,
    HooksComponent,
    ContentChildComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HostListenDirective,
    HostbiddingDirective,
    AppClassDirective,
    CondDirDirective,
    StyleDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
