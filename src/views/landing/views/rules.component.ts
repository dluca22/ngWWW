import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rules',
  templateUrl: './rules.template.html',
  styleUrls: ['../landing.component.scss']
})

export class RulesComponent implements OnInit {

  ngOnInit(){
    console.log('--- rules ---');
  }
}