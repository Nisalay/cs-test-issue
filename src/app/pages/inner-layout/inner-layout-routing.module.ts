import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { InnerLayoutComponent } from "./inner-layout.component";
import { GetProductsResolver } from '../../router/resolvers/get-products.resolver';
import { GetDictionariesResolver } from '../../router/resolvers/get-dictionaries.resolver';

const routes: Routes = [
  {
    path: '',
    component: InnerLayoutComponent,
    resolve: {
      getDictionaries: GetDictionariesResolver,
    },
    children: [
      {
        path: `:${ RouteParamsKeys.CategoryName }`,
        resolve: {
          getProducts: GetProductsResolver,
        },

      }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    GetDictionariesResolver,
    GetProductsResolver,
  ]
})
export class InnerLayoutRoutingModule { }
