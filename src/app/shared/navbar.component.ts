import { Component } from '@angular/core';
import { Router, RouterEvent, Event, ActivatedRoute} from "@angular/router";


@Component({
  selector: 'navbar',
  template: `
  <div>testo qui sotto</div>
    <div>
      {{testo}}
    </div>

  `
})
export class NavbarComponent {
  public testo:string = 'NO'

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

    

  ngOnInit() {


    this.testo =  this.activatedRoute.snapshot.data['testo'] ;

  }
}