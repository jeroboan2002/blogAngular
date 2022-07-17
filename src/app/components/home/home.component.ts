import { Component, OnInit} from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Post } from 'src/app/interfaces/post';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrPosts: Post[] = [];
  arrCategories: Category[] = [];

  constructor(
    private postsService: PostsService,
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.arrPosts = this.postsService.getAllPost();
    this.arrCategories = this.categoriesService.getAllCategories();
  }

  getCategory($event: any){
    if($event !=='' && $event.target.value !== 'cat'){
      this.arrPosts = this.postsService.getPostsByCategoria($event.target.value); 
       
    }else{
      this.arrPosts = this.postsService.getAllPost()
    }
  }  

}
