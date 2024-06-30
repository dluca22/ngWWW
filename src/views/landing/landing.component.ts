import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing-component',
  standalone: true,
  template: '<router-oulet></router-oulet>',
})
export class LandingComponent implements OnInit {

  ngOnInit(){
    console.log('--- LANDINGGGG ---');
  }
  
}
