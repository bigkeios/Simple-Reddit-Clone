import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  addArticle(titleInput: HTMLInputElement,linkInput: HTMLInputElement):boolean
  {
    console.log(`Adding article ${linkInput.value} with ${titleInput.value} `);
    // use the id, not the name of the variable they are turned into
    return false;
  }
}