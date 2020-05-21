import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromSelectors from '@app-common/store/selectors'

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  public products$: Observable<ProductDTO[]>;
  public displayedColumns = ['Название', 'Размер', 'Стоимость'];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.products$ = this.store.select(fromSelectors.products.selectProducts);
  }
}
