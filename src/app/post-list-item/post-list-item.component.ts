import { Component, OnInit,Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() 
  p:Post;


  constructor() {
    
   }
   loveIt(){
     this.p.loveItsPlus();
   }
   dontLoveIt()
   {
    this.p.loveItsMoins();
   }

  ngOnInit() {
  }

}
