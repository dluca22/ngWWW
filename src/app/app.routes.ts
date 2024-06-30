import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsComponent } from '@views/landing/news.component';
import { LandingComponent } from '@views/landing/landing.component';

export const routes: Routes = [ {
  path: '',
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'home', component: LandingComponent,
      data: {}
    },
    {
      path: 'news', component: NewsComponent,
      data: { }
    },
  ]
}];