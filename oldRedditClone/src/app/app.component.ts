import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Añado una nueva propiedad que es un array de artículos
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Github', 'http://github.com', 1),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    //Agrega un nuevo artículo
    this.articles.push(new Article(title.value, link.value, 0));
    //Pushea un nuevo artículo con: 1) título 2) link y 3) el puntaje que, como recién empieza, le pondremos 0.
    
    //Limpiar el input del formulario
    title.value = '';
    link.value = '';

    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}
