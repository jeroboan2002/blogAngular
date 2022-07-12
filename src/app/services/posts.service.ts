import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post';
import { CategoriesService } from './categories.service';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[] = POSTS
  id: number = 6;

  constructor() { 
    this.arrPosts = POSTS
  }

  getAllPost() : Post[]{
    return this.arrPosts;
  }

  agregarPost(pForm: any): void{
    const newPost: Post = {
      id: this.id, ...pForm
    }
  } 

  getPostsByCategoria(pCategory: string): Post[]{
    return this.arrPosts.filter(Post => Post.category === pCategory)
  }
}
