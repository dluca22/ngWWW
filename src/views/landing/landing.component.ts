import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'landing-component',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h1>Sono dentro a landing</h1>',
})
export class LandingComponent {

  ngOnInit(){

    console.log('--- LANDINGGGG ---');
  }
  
}
