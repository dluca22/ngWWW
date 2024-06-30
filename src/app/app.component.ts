import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, RouterModule} from '@angular/router';
import { SharedModule } from '../assets/shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, RouterModule],
  templateUrl: './app.component.html',
  // template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sport Fanta';


  ngOnInit(){

    // TODO add initialization for services
  }
  
}