import { Routes } from '@angular/router';

export const routes: Routes = [ 
  // { path: '', loadChildren: () => import('@views/login/login.module').then(m => m.LoginModule) },
  { path: '', loadChildren: () => import('@views/landing/landing.module').then(m => m.LandingModule) },

];

// export const routes: Routes = [ {
//   path: '',
//   children: [
//     { path: '', redirectTo: 'home', pathMatch: 'full' },
//     {
//       path: 'home', component: LandingComponent,
//       data: {}
//     },
//     {
//       path: 'news', component: NewsComponent,
//       data: { }
//     },
//   ]
// }];
