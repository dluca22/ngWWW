import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar.component';
import { SidebarComponent } from './shared/sidebar.component';
import { AppMenuComponent } from './layout/app.menu.component';

const routes: Routes = [
  {
    path: '',
    component: AppMenuComponent,
    children: [
      { path: '', redirectTo: 'test1', pathMatch: 'full' },
      {
        path: 'test1', component: AppMenuComponent,
        data: { testo: 'lol' }
      },
      {
        path: 'test2', component: NavbarComponent,
        data: { testo: 'rofl' }
      },
      {
        path: 'test3', component: NavbarComponent,
        data: { testo: 'lmao' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
