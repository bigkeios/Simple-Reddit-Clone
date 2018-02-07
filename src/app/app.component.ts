import { Component } from '@angular/core';
import { Article } from './article/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  articles: Article[];
  addArticle(titleInput: HTMLInputElement,linkInput: HTMLInputElement):boolean
  {
    console.log(`Adding article ${linkInput.value} with ${titleInput.value} `);
    // use the id, not the name of the variable they are turned into
    this.articles.push(new Article(linkInput.value, titleInput.value));
    linkInput.value = '';
    titleInput.value = '';
    return false;
    //refuses to reload
  }
  constructor()
  {
    this.articles = [
      new Article('angular.io', 'Angular', 1),
      new Article('reddit.com', 'Reddit', 2),
    ];
  }
}