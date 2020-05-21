import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { GetProductsResolver } from './router/resolvers/get-products.resolver';
import { GetDictionariesResolver } from './router/resolvers/get-dictionaries.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(loaded => loaded.LoginModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./pages/inner-layout/inner-layout.module').then(loaded => loaded.InnerLayoutModule),
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
