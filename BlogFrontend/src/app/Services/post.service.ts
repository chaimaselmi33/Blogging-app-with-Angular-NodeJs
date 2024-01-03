import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseURL = "http://localhost:4000"

  constructor(private http : HttpClient) { }

  getAllPosts(){
    return this.http.get<Post[]>(this.baseURL + "/post/get-all");
  }

  getPostsByCategory(cat : string){
    return this.http.get<Post[]>(this.baseURL + "/post/category/" + cat)
  }

  getOnePost(id : number){
    return this.http.get<Post>(this.baseURL + "/post/get-post/" + id);
  }

  savePost(p : Post){
    return this.http.post<Post>(this.baseURL + "/post/add", p)
  }

}
