import { Injectable } from '@angular/core';
import { Category } from '../Models/category';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseURL = "http://localhost:4000"

  constructor(private http : HttpClient) { }

  getAllCategories(){
    return this.http.get<Category[]>(this.baseURL + "/category/get-all");
  }

}
