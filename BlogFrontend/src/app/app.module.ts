import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormComponent } from './Components/contact-form/contact-form.component';
import { PostDetailsComponent } from './Components/post/post-details/post-details.component';
import { GetPostsComponent } from './Components/post/get-posts/get-posts.component';
import { AddPostComponent } from './Components/post/add-post/add-post.component';
import { AddCommentComponent } from './Components/comment/add-comment/add-comment.component';
import { GetCommentsComponent } from './Components/comment/get-comments/get-comments.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { PostsTemplatesComponent } from './Pages/posts-templates/posts-templates.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    PostDetailsComponent,
    GetPostsComponent,
    AddPostComponent,
    AddCommentComponent,
    GetCommentsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PostsTemplatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
