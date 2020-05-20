import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { InnerLayoutComponent } from "./inner-layout.component";

const routes: Routes = [
  {
    path: '',
    component: InnerLayoutComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class InnerLayoutRoutingModule { }
