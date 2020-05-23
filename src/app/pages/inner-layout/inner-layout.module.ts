import { NgModule } from '@angular/core';

import { InnerLayoutRoutingModule } from "./inner-layout-routing.module";
import { InnerLayoutComponent } from './inner-layout.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTreeModule } from "@angular/material/tree";
import { MatIconModule } from "@angular/material/icon";
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from '@angular/material/sort';
import { EditTableDialogComponent } from './components/products-table/components/edit-table-dialog/edit-table-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    InnerLayoutComponent,
    TopbarComponent,
    SideNavComponent,
    ProductsTableComponent,
    EditTableDialogComponent,
  ],
  imports: [
    InnerLayoutRoutingModule,
    MatSidenavModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatTreeModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  entryComponents: [
    EditTableDialogComponent
  ]

})
export class InnerLayoutModule { }
