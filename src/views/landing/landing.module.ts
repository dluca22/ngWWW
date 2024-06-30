import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './landing-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent, NewsComponent, ContactsComponent, RulesComponent } from '@views/landing/views';



@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [ 
    LandingComponent,
    IndexComponent,
    NewsComponent,
    ContactsComponent,
    RulesComponent ],
  exports: [
    IndexComponent,
    NewsComponent,
    ContactsComponent,
    RulesComponent
  ]
})
export class LandingModule { }
