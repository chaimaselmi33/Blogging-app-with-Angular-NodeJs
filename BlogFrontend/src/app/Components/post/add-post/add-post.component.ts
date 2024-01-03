import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/Services/category.service';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  categoriesArray : Category[]=[];

  constructor(private postService: PostService, private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getAllCategories().subscribe(res => {
      this.categoriesArray = res
      console.log("categories :", this.categoriesArray)
    })
  }

  onSubmit(f: any) {
    console.log("form obj", f);
    this.postService.savePost(f).subscribe(res => {
      
    })
  }

}
