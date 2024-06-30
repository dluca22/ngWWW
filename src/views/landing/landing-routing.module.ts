import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent, NewsComponent, ContactsComponent, RulesComponent } from '@views/landing/views';
// import { AuthGuard } from '@core/services/auth.guard';

export const routes: Routes = [ {
  path: '',
  children: [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    {
      path: 'index', component: IndexComponent,
      data: {}
    },
    {
      path: 'news', component: NewsComponent,
      data: {}
    },
    {
      path: 'contacts', component: ContactsComponent,
      data: {}
    },
    {
      path: 'rules', component: RulesComponent,
      data: {}
    }
  ]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
