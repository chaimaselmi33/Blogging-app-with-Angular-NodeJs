import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { Comment } from 'src/app/Models/comment';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post_id!: number;
  post!: Post;
  cat_id?: number;
  relatedPosts: any[] = [];
  //p: any[] = [];
  //of type comment
  commentsArray: any;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    this.post_id = this.activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    //extract param from active route
    this.getPostById();
    this.getRelatedPosts();
  }

  getPostById() {
    this.postService.getOnePost(this.post_id).subscribe(res => {
      this.post = res;
      console.log("post", this.post)
      this.cat_id = this.post.category?.id_category
      this.commentsArray = this.post.comments
      //console.log("p cmt", this.commentsArray)
    })
  }

  getRelatedPosts() {
    this.postService.getAllPosts().subscribe(async res => {
      //console.log("cat_id", this.cat_id);
      await res.forEach((p: any) => {
        if ((p.id_category === this.cat_id) && (p.id_post != this.post_id)) {
          this.relatedPosts.push(p)
        }
      })
    })
    console.log("relatedposts array :", this.relatedPosts)
  }

}
