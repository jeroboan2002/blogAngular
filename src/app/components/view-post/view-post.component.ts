import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';




@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  
  miPost: Post | any;
  
  constructor(
  private activatedRoute: ActivatedRoute,
  private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = parseInt(params['idpost'])
      this.miPost = this.postsService.getById(id);
    })
  }

}
