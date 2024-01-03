import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/Models/comment';
import { CommentService } from 'src/app/Services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  @Input() comments! : Comment[];
  @Input() post_id! : number;

  constructor(private commentService : CommentService) { }

  ngOnInit(): void {
    console.log("intialize :", this.post_id)
    console.log("comment array gbg :", this.comments)
  }

  onSubmit(f: any) {
    f.id_post = this.post_id
    console.log("Form object :", f);
    this.commentService.saveComment(f).subscribe(res =>{
    });
  }

}
