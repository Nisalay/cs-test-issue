import { NgModule } from '@angular/core';

import { InnerLayoutRoutingModule } from "./inner-layout-routing.module";
import { InnerLayoutComponent } from './inner-layout.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [
    InnerLayoutComponent,
    TopbarComponent,
    SideNavComponent
  ],
  imports: [
    InnerLayoutRoutingModule,
    MatSidenavModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
  ],

})
export class InnerLayoutModule { }
