import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post';




@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[] = POSTS;
  id: number = 6;

  constructor() { 
    this.arrPosts = POSTS
  }

  getAllPost() : Post[]{
    return this.arrPosts.slice(0, this.arrPosts.length);
  }

  agregarPost(pForm: any): void{
    const newPost: Post = {
      id: this.id, ...pForm
    }
    this.arrPosts.push(newPost)
  } 

  getPostsByCategoria(pCategory: string): Post[]{
    return this.arrPosts.filter(Post => Post.category === pCategory)
  }

  getById(id: number): Post | any {
    return this.arrPosts.find(post => post.id === id)
  }
}
