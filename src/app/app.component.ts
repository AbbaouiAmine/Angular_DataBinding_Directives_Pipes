import { Component } from '@angular/core';
import {Post} from './post';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   p:Post;
   posts:Array<Post>=[
     new Post("Mon Premier Post","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit purus, accumsan tincidunt viverra a, lobortis ac neque. Morbi non feugiat arcu. Pellentesque et egestas nibh. Phasellus a nulla in lacus vestibulum blandit. Suspendisse quis massa quis metus lobortis vestibulum. Nunc ullamcorper felis quis tellus porta, in rutrum mauris vulputate. Vestibulum volutpat aliquam consectetur. Suspendisse vestibulum ac lectus quis placerat. Aenean in mauris a mi laoreet rutrum. Quisque facilisis mattis odio, in posuere nunc finibus id. Aenean sed mi justo. Fusce in lacinia risus, placerat posuere risus. Quisque quis enim lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",0,new Date()),
     new Post("Mon deuxième Post","Vestibulum eleifend lorem nisi. Praesent congue ligula non sapien semper tincidunt. Ut vehicula cursus ante, finibus volutpat dolor imperdiet quis. Sed blandit aliquet lacus ac aliquet. Maecenas sodales ex magna, eget elementum nisl aliquet sed. Phasellus convallis purus imperdiet feugiat pretium. Curabitur ac posuere mi, vitae convallis ipsum. Sed pharetra ligula et mauris tristique viverra. Pellentesque sed leo id eros semper congue. Nullam efficitur diam non eros commodo tristique. Nulla convallis egestas lectus sed viverra. ",0,new Date()),
     new Post("Encore un Post","Praesent rhoncus sagittis ligula nec iaculis. Aliquam fermentum nisi vel ex bibendum, nec porta felis egestas. Aenean fermentum, purus in commodo blandit, risus mauris imperdiet tellus, id imperdiet enim libero vel tortor. Nulla scelerisque, nisl sit amet fringilla ultricies, lectus lacus interdum arcu, vel interdum libero eros eget dui. Integer ultricies sed nisi eget elementum. Proin condimentum, nunc tempus mattis facilisis, metus urna vulputate orci, consequat lacinia nisl dui at felis. Sed ligula leo, congue vel lorem ac, consequat blandit magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. ",0,new Date())];
  constructor()
  {
    
  }
}
