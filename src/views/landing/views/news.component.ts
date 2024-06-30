import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.template.html',
  styleUrls: ['../landing.component.scss']
})

export class NewsComponent implements OnInit {

  ngOnInit(){
    console.log('--- news ---');
  }
}