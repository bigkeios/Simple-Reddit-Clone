import { Component, OnInit, HostBinding } from '@angular/core';
import {Article} from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit 
{
  @HostBinding('attr.class') cssClass = 'row';
  article: Article;
  voteUp()
  {
    this.article.votes += 1;
  }
  voteDown()
  {
    this.article.votes -= 1;
  }
  ngOnInit() {
  }

}
