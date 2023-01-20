import { Component } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  
  article: Article;

  constructor() {
    this.article = new Article('Angular', 'https://angular.io', 10)
  }

  voteUp() {
    this.article.voteUp();
    return false;
    //El return false previene que el navegador siga el link vacío y refresque la página.
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }
}
