import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../informacion.service';
import { Post } from '../Post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listadoPost: Post[];
  categorias: string[];


  constructor(private informacionService: InformacionService) {
    this.listadoPost = [];
    this.categorias = [];

  }

  ngOnInit(): void {

    //recupero categorias
    this.informacionService.getPostsCategorias()
      .then(arrCategorias => this.categorias = arrCategorias);


    //muestro los Post
    this.informacionService.getAllPost()
      .then(posts => this.listadoPost = posts)
      .catch(error => console.log(error));

  }


  async onChange($event) {
    if ($event.target.value === 'todos') {
      this.listadoPost = await this.informacionService.getAllPost();
    } else {
      this.listadoPost = await this.informacionService.getPostsByCategoria($event.target.value);
    }
  }

  onClick(pIndice: number) {
    this.informacionService.deleteImg(pIndice);
  }

}
