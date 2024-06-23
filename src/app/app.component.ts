import { Component } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationStart, Router, RouterEvent, Event} from "@angular/router";

import { DataService } from '../services';

@Component({
  selector: 'app-root',
  template: `<router-outlet><span class="main-loader" *ngIf="isLoading"><i class="fas fa-spinner fa-spin"></i></span></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sportfanta';
  isLoading: boolean = true;

  constructor(
    private router: Router,
    public dataService: DataService,
  ) {
    
    this.isLoading = false;
    router.events.subscribe(
      (event: Event|RouterEvent): void => {
        if (event instanceof NavigationStart) {
          this.isLoading = true;
        } else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
          this.isLoading = false;
        }
      }
    );
  }

  ngOnInit() {

    // this.langsService.$flush();
    // this.langsService.$load();

  }
}
