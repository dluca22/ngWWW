import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.template.html',
  styleUrls: ['../landing.component.scss']
})

export class ContactsComponent implements OnInit {

  ngOnInit(){
    console.log('--- contacts ---');
  }
}