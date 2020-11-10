import { Injectable } from '@angular/core';
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  arrPost: Post[];

  constructor() {
    this.arrPost = [];
  }

  agregarPost(pNuevoPost) {
    this.arrPost.push(pNuevoPost);
    console.log(pNuevoPost);

  }

  getAllPost(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost);
      console.log(this.arrPost);

    })
  }

  getPostsByCategoria(pCategoria: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = this.arrPost.filter(post => {
        return post.categoria == pCategoria;
      });
      resolve(arrFiltrado);
      console.log(arrFiltrado);

    });
  }

  getPostsCategorias(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const categorias = [];
      for (let post of this.arrPost) {
        if (!categorias.includes(post.categoria)) {
          categorias.push(post.categoria);
        }
      }
      resolve(categorias);

    })
  }

}