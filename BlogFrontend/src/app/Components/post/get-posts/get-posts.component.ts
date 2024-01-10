import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-get-posts',
  templateUrl: './get-posts.component.html',
  styleUrls: ['./get-posts.component.scss']
})
export class GetPostsComponent implements OnInit {

  posts:Post[]= []

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.postService.getAllPosts().subscribe(res => {
      this.posts = res
      console.log("posts", this.posts)
    })
  }

}
