import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromSelectors from '@app-common/store/selectors'
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { EditTableDialogComponent } from './components/edit-table-dialog/edit-table-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  public dataSource: MatTableDataSource<ProductDTO> = new MatTableDataSource();
  public displayedColumns = ['Название', 'Размер', 'Стоимость', 'Действия'];

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.store.select(fromSelectors.products.selectProducts)
      .subscribe(products => {
        this.dataSource.data = products;
      });
  }

  public sortData(sort: Sort) {
  }

  public openDialog({ data, event }: EditTableDialogConfigDTO) {
    const dialogRef = this.dialog.open(EditTableDialogComponent, {
      width: '350px',
      data: {
        event,
        data
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  private compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
