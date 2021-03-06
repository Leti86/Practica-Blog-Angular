import { Injectable } from '@angular/core';
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  arrPost: Post[];

  constructor() {/* antes de crear el array vacio compruebo si esta en local store */
    if (localStorage.getItem('post')) {
      this.arrPost = JSON.parse(localStorage.getItem('post'));
    } else {
      this.arrPost = [];
    }
  }

  agregarPost(pNuevoPost) {/* guardo el array de Post en localstore */
    this.arrPost.push(pNuevoPost);
    console.log(pNuevoPost);
    localStorage.setItem('post', JSON.stringify(this.arrPost));

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

  deleteImg(pIndice: number) {
    this.arrPost.splice(pIndice, 1);
    localStorage.setItem('post', JSON.stringify(this.arrPost));
  }

}
