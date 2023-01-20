import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'https://angular.io';
    this.votes = 10;
  }

  voteUp() {
    this.votes = this.votes + 1;
  }

  voteDown() {
    this.votes = this.votes - 1;
  }
}
