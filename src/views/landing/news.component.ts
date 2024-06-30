import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'news-component',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h3>Sono dentro a news</h3>',
})
export class NewsComponent {

  ngOnInit(){

    console.log('--- NEWSSS ---');
  }
  
}
