import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductsActionTypes, SetProductsSuccess } from '@app-common/store/products/product.actions';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { ProductsService } from '@app-common/services/products.service';
import { Injectable } from '@angular/core';
import { SetSelectedSideNavItem } from '@app-common/store/side-nav/side-nav.actions';

import * as fromSelectors from '@app-common/store/selectors'
import { Store } from '@ngrx/store';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService,
    private store: Store<AppState>
  ) {}

  /**
   * Эффект для получения продуктов по соответствующей категории
   * Так же устанавливает выбранную категорию (selectedItemCode)
   */
  @Effect()
  readProducts$ = this.actions$.pipe(
    ofType(ProductsActionTypes.ReadProducts),
    switchMap(({ categoryName }) => {
      return this.productService.getProducts(categoryName)
        .pipe(
          switchMap((products: ProductDTO[]) => [
            SetProductsSuccess({ products }),
            SetSelectedSideNavItem({ selectedItemCode: categoryName })
          ])
        )
    })
  )

  /**
   * Эффект для добавления продукта в выбранную категорию
   */
  @Effect()
  createProduct$ = this.actions$.pipe(
    ofType(ProductsActionTypes.CreateProduct),
    withLatestFrom(this.store.select(fromSelectors.sideNav.selectSideNavItem)),
    switchMap(([{ type, ...product }, sideNavItem]: [any, SideNavItemDTO]) => {
      return this.productService.addProduct({ product, categoryName: sideNavItem.code })
    }),
    map((products: ProductDTO[]) => SetProductsSuccess({ products }))
  )

  /**
   * Эффект для изменения продукта в выбранной категории
   */
  @Effect()
  updateProduct$ = this.actions$.pipe(
    ofType(ProductsActionTypes.UpdateProduct),
    withLatestFrom(this.store.select(fromSelectors.sideNav.selectSideNavItem)),
    switchMap(([{ type, ...product }, sideNavItem]: [any, SideNavItemDTO]) => {
      return this.productService.updateProduct({ product, categoryName: sideNavItem.code })
    }),
    map((products: ProductDTO[]) => SetProductsSuccess({ products }))
  )

  /**
   * Эффект для удаления продукта из выбранной категории
   */
  @Effect()
  deleteProduct$ = this.actions$.pipe(
    ofType(ProductsActionTypes.DeleteProduct),
    withLatestFrom(this.store.select(fromSelectors.sideNav.selectSideNavItem)),
    switchMap(([{ id }, sideNavItem]: [any, SideNavItemDTO]) => {
      return this.productService.deleteProduct({ id, categoryName: sideNavItem.code })
    }),
    map((products: ProductDTO[]) => SetProductsSuccess({ products }))
  )
}
