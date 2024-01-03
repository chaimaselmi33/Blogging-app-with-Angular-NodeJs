import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './Components/contact-form/contact-form.component';
import { PostDetailsComponent } from './Components/post/post-details/post-details.component';
import { HomeComponent } from './Pages/home/home.component';
import { AddPostComponent } from './Components/post/add-post/add-post.component';
import { AddCommentComponent } from './Components/comment/add-comment/add-comment.component';

const routes: Routes = [

  { path: 'contact', component: ContactFormComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: '', component: HomeComponent},
  { path: 'category/:cat', component: HomeComponent},
  { path: 'add-post', component: AddPostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
