import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit 
{
  @HostBinding('attr.class') cssClass = 'row';
  link: string;
  title: string;
  votes: number;
  constructor()
  // ? -> optional
  {
    this.title = 'Real Reddit';
    this.link = 'reddit.com';
    this.votes = 10;
  }
  voteUp()
  {
    this.votes += 1;
  }
  voteDown()
  {
    this.votes -= 1;
  }
  ngOnInit() {
  }

}
