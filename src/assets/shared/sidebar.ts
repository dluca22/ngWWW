import { Component } from '@angular/core';
import { Router, RouterEvent, Event} from "@angular/router";


@Component({
  selector: 'sidebar',
  
  template: `
  <ul>
  <li class="nav-item" [routerLinkActive]="['active']">
    <div class="nav-line">
      <a class="nav-link" routerLink="test1">
        <i class="fa fa-bars-staggered fa-sm"></i>
        <span>Link 1</span>
      </a>
    </div>
  </li>
  <li class="nav-item" [routerLinkActive]="['active']">
    <div class="nav-line">
      <a class="nav-link" routerLink="test2">
        <i class="fa fa-bars-staggered fa-sm"></i>
        <span>Link 2</span>
      </a>
    </div>
  </li>
  <li class="nav-item" [routerLinkActive]="['active']">
    <div class="nav-line">
      <a class="nav-link" routerLink="test3">
        <i class="fa fa-bars-staggered fa-sm"></i>
        <span>Link 3</span>
      </a>
    </div>
  </li>

</ul>
<router-outlet></router-outlet>
`
})
export class SidebarComponent {

}