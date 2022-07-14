import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';





@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css']
})
export class BlogComponentComponent implements OnInit {
  @Input() item: any
  @Input() category: string = ''
  post: Post | any


  constructor() {
  }

  ngOnInit(): void {
    if(this.category === 'posts'){
      this.post = this.item;
    }else{
      this.post = this.item;
    }
  }

  

  
  
}
