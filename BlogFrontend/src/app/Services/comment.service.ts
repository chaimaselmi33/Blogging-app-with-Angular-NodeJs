import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../Models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseURL = "http://localhost:4000"

  constructor(private http: HttpClient) { }

  saveComment(cmt : Comment){
    console.log("from service", cmt)
    return this.http.post<Comment>(this.baseURL + "/comment/add", cmt);
  }
}
